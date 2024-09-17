import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Nabar";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import SinglePost from "./SinglePost";
import Category from "./Category";
import Error from "./Error";

const App = () => {
  let [cat, setCat] = useState([]);
  let [current, setCurrent] = useState("");
  let [single, setSingle] = useState(false);
  let [searchApp, setSearchApp] = useState("");

  let setSearch = (sea) => {
    setSearchApp(sea);
  };

  let changeSingle = () => {
    setSingle(true);
    console.log(single);
  };

  let onChangeCat = (cat) => {
    setCurrent(cat);
    console.log(cat);
    setSingle(false);
  };

  let changeToHome = () => {
    setCurrent("");
    setSingle(false);
  };
  useEffect(() => {}, [current]);

  useEffect(() => {
    fetch("https://xbellstore.com/itsharks24/blog/api/getcategory.php")
      .then((response) => response.text())
      .then((result) => {
        setCat(JSON.parse(result));
        console.log(JSON.parse(result));
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar cat={cat} singleV={single} search={setSearch} />
        <Sidebar cat={cat} cur={current} />
        <Routes>
          <Route
            path="/"
            element={<Home onChange={changeToHome} search={searchApp} />}
          />
          <Route
            path="/post/:id"
            element={<SinglePost onChange={changeSingle} />}
          />
          <Route
            path="/cat/:category"
            element={<Category onChange={onChangeCat} search={searchApp} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
