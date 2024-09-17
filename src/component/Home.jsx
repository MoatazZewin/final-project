import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = (props) => {
  let [posts, setPosts] = useState([]);
  let [all, setAll] = useState([]);
  useEffect(() => {
    let s;
    if (all.length) {
      s = all.filter((post) => {
        return post.title.toLowerCase().includes(props.search);
      });
      setPosts(s);
    }
  }, [props.search]);

  let [load, setLoading] = useState(true);
  let [numberOfPosts, setNumber] = useState({});
  useEffect(() => {
    fetch("https://xbellstore.com/itsharks24/blog/api/getposts.php")
      .then((response) => response.text())
      .then((result) => {
        setPosts(JSON.parse(result));
        setAll(JSON.parse(result));
        // console.log(typeof JSON.parse(result)[5].description);
        // console.log(JSON.parse(result));
        // setLoading(false);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
    props.onChange();
  }, []);
  return (
    <>
      <div className="container head-cont">
        <div className="row">
          {load && (
            <div className="col-9 k">
              <div className="loader"></div>
            </div>
          )}
          {!load &&
            posts.map((post) => {
              let x = document.createElement("div");
              x.innerHTML = post.description;

              return (
                <div className=" col-9 mb-5 cont-home " key={post.id}>
                  <NavLink to={`/post/${post.id}`} className="par">
                    <img
                      className="post-img"
                      alt={post.description}
                      src={`https://xbellstore.com/itsharks24/blog/admin/${post.image}`}
                    />
                    <div className="content-text">
                      <p className="icon-p">
                        <i className="fa-regular fa-calendar-days icon-h"></i>
                        {" " + post.date}
                      </p>
                      <h3 className="post-title">{post.title}</h3>

                      <div>
                        <b>Description: </b>
                        {x.firstChild.textContent.length < 100 ? (
                          <p
                            dangerouslySetInnerHTML={{ __html: x.innerHTML }}
                          />
                        ) : (
                          x.firstChild.textContent.slice(0, 50) +
                          ".....read more"
                        )}
                      </div>
                      <p>
                        <b>Writer: </b>
                        {post.writer}
                      </p>
                    </div>
                  </NavLink>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
