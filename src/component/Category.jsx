import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Category = (props) => {
  let [posts, setPosts] = useState([]);
  let cat = useParams();
  let [load, setLoading] = useState(true);
  let [all, setAll] = useState([]);

  useEffect(() => {
    props.onChange(cat.category);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    fetch(
      `https://xbellstore.com/itsharks24/blog/api/getpostsbycategory.php?category=${cat.category}`
    )
      .then((response) => response.text())
      .then((result) => {
        //   setPosts(JSON.parse(result));
        console.log(JSON.parse(result));
        setPosts(JSON.parse(result));
        setLoading(false);
        setAll(JSON.parse(result));
      });
  }, [cat.category]);

  useEffect(() => {
    let s;
    if (all.length) {
      s = all.filter((post) => {
        return post.title.toLowerCase().includes(props.search);
      });
      console.log(s);
      setPosts(s);
    }
  }, [props.search]);
  return (
    <>
      <div className="container head-cont">
        <div className="row">
          <div className="div-cat col-8">
            <h2 className="cat-heading ">{cat.category}</h2>
          </div>
          {load && (
            <div className="col-9 k">
              <div className="loader"></div>
            </div>
          )}
          {!load && posts.length === 0 ? (
            <h1 className="no-posts">NO POSTS YET</h1>
          ) : (
            posts.map((post) => {
              let x = document.createElement("div");
              x.innerHTML = post.description;
              return (
                <div className="col-8 mb-5 cat-div-small" key={post.id}>
                  <NavLink to={`/post/${post.id}`} className="par-cat">
                    <img
                      className="post-img-single-post"
                      alt={post.description}
                      src={`https://xbellstore.com/itsharks24/blog/admin/${post.image}`}
                    />
                    <div className="content-text">
                      <h1>{post.title}</h1>
                      <p>
                        <i className="fa-regular fa-calendar-days"></i>
                        {" " + post.date}
                      </p>
                      <div>
                        <b>Description: </b>
                        {/* {x.firstChild.textContent} */}
                        <div
                          dangerouslySetInnerHTML={{ __html: x.innerHTML }}
                        />
                      </div>
                      <p>
                        <b>Writer: </b>
                        {post.writer}
                      </p>
                    </div>
                  </NavLink>

                  <div className="pageSocial ">
                    <div>
                      <i className="fa-brands fa-instagram h"></i>
                      <i className="fa-brands fa-facebook-f h"></i>
                      <i className="fa-brands fa-twitter h"></i>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Category;
