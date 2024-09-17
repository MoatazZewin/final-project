import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  let [postNumber, setNumber] = useState({});
  let [recent, recentPost] = useState({});
  let [nameActive, setActive] = useState("");
  useEffect(() => {
    console.log("side par");
    fetch("https://xbellstore.com/itsharks24/blog/api/getposts.php")
      .then((response) => response.text())
      .then((result) => {
        let r = JSON.parse(result);
        let all = {};
        r.forEach((a) => {
          all[a.category] =
            all[a.category] === undefined ? 1 : all[a.category] + 1;
        });
        // console.log(typeof JSON.parse(result)[5].description);
        // console.log(JSON.parse(result));
        setNumber(all);
        console.log(document.body.offsetHeight);
        // console.log(all);
        fetch("https://xbellstore.com/itsharks24/blog/api/getrecentpost.php")
          .then((response) => response.text())
          .then((result) => {
            recentPost(JSON.parse(result)[0]);
          });
      });
  }, [props.cur]);
  let changeSide = () => {
    console.log(postNumber);
    console.log(props.cur);
    console.log(postNumber[props.cur]);
    if (props.cur === "") {
      return "side-bar";
    } else {
      if (postNumber[props.cur] > 1) {
        return "side-bar";
      } else {
        return "side-bar scroll-s";
      }
    }
  };
  return (
    <>
      <div className={changeSide()}>
        {!props.cur && (
          <>
            <p>ABOUT US</p>
            <img src="assets/ourlogo.png" alt="" />
            <p>
              A training company specialized in teaching programming languages,
              networking and computer science to ensure that you get practical
              experience in the field of software.
            </p>
          </>
        )}
        <p className="cat-head-side">Category</p>
        <ul className="cat-side">
          {props.cat.map((cate) => {
            return (
              <li key={cate.id}>
                <NavLink
                  style={({ isActive }) => {
                    // setActive(cate.name);
                    return isActive ? { backgroundColor: "blue" } : {};
                  }}
                  className="dropdown-item h link-side"
                  to={`/cat/${cate.name}`}
                >
                  {cate.name}{" "}
                  <span>
                    {postNumber[cate.name] !== undefined
                      ? postNumber[cate.name]
                      : 0}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <h5>Recent post</h5>
        <NavLink className="recent-post" to={`/post/${recent.id}`}>
          <img
            src={`https://xbellstore.com/itsharks24/blog/admin/${recent.image}`}
            alt=""
            height={"100px"}
          />
          <h5 style={{ backgroundColor: "#eee", margin: 0 }}>{recent.title}</h5>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
