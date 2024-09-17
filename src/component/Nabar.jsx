// import React, { useEffect, useState } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  let [searchIn, setSearch] = useState("");
  // let [cat, setCat] = useState([]);

  // useEffect(() => {
  //   fetch("https://xbellstore.com/itsharks24/blog/api/getcategory.php")
  //     .then((response) => response.text())
  //     .then((result) => {
  //       setCat(JSON.parse(result));
  //       console.log(JSON.parse(result));
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  let onChangeInput = (e) => {
    setSearch(e.currentTarget.value);
    console.log(e.currentTarget.value);
    props.search(e.currentTarget.value);
  };

  return (
    <>
      <div className="hero">
        <h1 className="text-center font-get">IT SHARKS 33</h1>
        {!props.singleV && (
          <div className="text-center search">
            <label>
              Search:
              <input type="search" value={searchIn} onChange={onChangeInput} />
            </label>
          </div>
        )}
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light head">
        <div className="container ">
          <NavLink className="navbar-brand main-meun " to="/">
            HOME
          </NavLink>
          <div className="nav-item dropdown me-auto ">
            <span
              className="nav-link dropdown-toggle navbar-brand main-meun h"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              CATEGORY
            </span>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {props.cat.map((cate) => {
                return (
                  <li key={cate.id}>
                    <NavLink
                      className="dropdown-item h "
                      to={`/cat/${cate.name}`}
                    >
                      {cate.name}
                    </NavLink>
                  </li>
                );
              })}
              {/* <li>
                <NavLink classNameName="dropdown-item h" to="/">
                  Action
                </NavLink>
              </li>
              <li>
                <NavLink classNameName="dropdown-item h" to="/">
                  Another action
                </NavLink>
              </li>
              <li>
                <hr classNameName="dropdown-divider" />
              </li>
              <li>
                <NavLink classNameName="dropdown-item h" to="/">
                  Something else here
                </NavLink>
              </li> */}
            </ul>
          </div>
          {/* <button
            classNameName="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end vis"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Navber</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <i className="fa-brands fa-instagram h"></i>
                </li>
                <li className="nav-item">
                  <i className="fa-brands fa-facebook-f h"></i>
                </li>

                <li className="nav-item">
                  <i className="fa-brands fa-twitter h"></i>
                </li>
                <li className="nav-item">
                  <i className="fa-solid fa-heart h"></i>
                </li>

                <li className="nav-item">
                  <i className="fa-brands fa-pinterest h"></i>
                </li>
                <li className="nav-item">
                  <i className="fa-brands fa-google-plus-g h"></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ms-auto icons ">
              <i className="fa-brands fa-instagram h"></i>
              <i className="fa-brands fa-facebook-f h"></i>
              <i className="fa-brands fa-twitter h"></i>
              <i className="fa-solid fa-heart h"></i>
              <i className="fa-brands fa-pinterest h"></i>
              <i className="fa-brands fa-google-plus-g h"></i>
            </div>

            {/* <input
                classNameName="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button classNameName="btn btn-outline-success" type="submit">
                Search
              </button> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
