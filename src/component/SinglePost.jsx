import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const SinglePost = (props) => {
  let obj = useParams();
  let [single, setSingle] = useState([]);
  let [related, setRelated] = useState([]);
  let [load, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    fetch(
      `https://xbellstore.com/itsharks24/blog/api/singlepost.php?id=${obj.id}`
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        setSingle(JSON.parse(result)[0]);

        fetch(
          `https://xbellstore.com/itsharks24/blog/api/getrelated.php?category=Sports&id=${obj.id}`
        )
          .then((response) => response.text())
          .then((result) => {
            setRelated(JSON.parse(result));
            setLoading(false);
            props.onChange();
          });
      });
  }, [obj]);
  return (
    <>
      <div className="container head-cont">
        <div className="row">
          {load && (
            <div className="col-9 k">
              <div className="loader"></div>
            </div>
          )}
          {!load && (
            <div className=" col-8 mb-5 single-div" key={single.id}>
              <img
                className="post-img-single-post"
                alt={single.description}
                src={`https://xbellstore.com/itsharks24/blog/admin/${single.image}`}
              />
              <div className="content-text">
                <h1>{single.title}</h1>
                <p>
                  <i className="fa-regular fa-calendar-days"></i>
                  {" " + single.date}
                </p>
                <div>
                  <b>Description: </b>
                  <div
                    dangerouslySetInnerHTML={{ __html: single.description }}
                  />
                </div>
                <p>
                  <b>Writer: </b>
                  {single.writer}
                </p>
              </div>
            </div>
          )}

          <div className="pageSocial col-8">
            <div>
              <i className="fa-brands fa-instagram h"></i>
              <i className="fa-brands fa-facebook-f h"></i>
              <i className="fa-brands fa-twitter h"></i>
            </div>
          </div>
          <p className="text-center col-8">related posts</p>
          <div className="col-8 related-div">
            <div className="row cont-related">
              {related.map((e) => {
                return (
                  <NavLink
                    className="col single-post-related"
                    key={e.id}
                    to={`/post/${e.id}`}
                  >
                    <div
                      style={{
                        backgroundImage: `url(https://xbellstore.com/itsharks24/blog/admin/${e.image})`,
                        backgroundSize: "cover",
                        position: "relative",
                      }}
                    ></div>
                    <div className="relate-post ">
                      <h3>{e.title}</h3>
                      <p>{e.date}</p>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
