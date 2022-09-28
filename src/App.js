import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./website/Navbar";
import Sidebar from "./website/Sidebar";
import { BrowserRouter, Switch, Routes, Route, Link } from "react-router-dom";
import Topics from "./website/Topics";
import HomeContent from "./website/HomeContent";
import Explore from "./website/Explore";
import Null from "./website/Null";
import Gaming from "./website/Gaming";
import Sports from "./website/Sports";
function App() {
  const [menu, setMenu] = useState(true);
  const [size, setSize] = useState(window.innerWidth);
  const [isSideBar, setIsSideBar] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [side, setSide] = useState(false);

  let click = () => {
    setMenu(!menu);
    /*    if (window.innerWidth < 1074 && !menu) {
      setIsSideBar(!isSideBar);
    }
    if (window.innerWidth < 1074 && menu) {
      setIsSideBar(!isSideBar);
    }
 */
    if (window.innerWidth < 780) {
      setShowMenu(!showMenu);
      setMenu(true);
    }

    if (window.innerWidth < 780 && !showMenu) {
      setSide(true);
    }
  };

  let showSize = () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 1074) {
      setMenu(false);
    }
    if (window.innerWidth > 1074) {
      setMenu(true);
    }
    if (window.innerWidth > 780) {
      setShowMenu(true);
      setSide(false);
    }

    if (window.innerWidth < 780) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    /* if (window.innerWidth < 1074) {
      setMenu(false);
    } */
    window.addEventListener("resize", showSize);
    return () => {
      if (window.innerWidth < 1074) {
        setMenu(false);
      }
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 780) {
      setShowMenu(false);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1074) {
      setMenu(true);
    }
  }, []);

  let tap = () => {
    if (side) {
      setSide(false);
    }
  };

  return (
    <>
      <BrowserRouter>
        {" "}
        <Navbar click={click} />
        {/*  <React.Fragment> */}
        <section
          className="youtube-clone-container"
          style={{
            marginLeft: menu ? "15%" : "9%",
          }}
        >
          <Topics />
          <Routes>
            {" "}
            <Route path="/" element={<HomeContent />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/watch" element={<Null />}></Route>
            <Route path="/history" element={<Null />}></Route>
            <Route path="/likes" element={<Null />}></Route>
            <Route path="/reports" element={<Null />}></Route>
            <Route path="/subscription" element={<Null />}></Route>
            <Route path="/videos" element={<Null />}></Route>
            <Route path="/library" element={<Null />}></Route>
            <Route path="/gaming" element={<Gaming />}></Route>
            <Route path="/sports" element={<Sports />}></Route>
          </Routes>
        </section>{" "}
        <Sidebar
          isSideBar={isSideBar}
          menu={menu}
          showMenu={showMenu}
          side={side}
        />
        {/* </React.Fragment>  */}
      </BrowserRouter>
    </>
  );
}

export default App;
