import React, { createContext, useContext, useEffect, useState } from "react";
import { sectionOne, sectionTwo } from "./data/sidebar-data/sidebar-data";
import { Link } from "react-router-dom";

const CreateContext = React.createContext();

let Sidebar = ({ menu, isSideBar, showMenu, side }) => {
  const [iconsOne, setIconsOne] = useState(sectionOne);

  const [size, setSize] = useState(window.innerWidth);

  /*  useEffect(() => {
    if (menu) {
      setIconsOne(sectionOne);
    }
  }); */

  /*  useEffect(() => {
   if (!menu) {
      setIconsOne({
        ...iconsOne,

        one: [],
        two: [],
        three: [],
        four: [],
        five: "",
        six: "",
        seven: "",
      });
    } 
    return () => {
      if (menu) {
        setIconsOne(sectionOne);
      }
    };
  }, [menu, iconsOne]); */

  return (
    <section
      className="youtube-clone-sidebar"
      /*     style={{
        position: isSideBar ? "fixed" : "absolute",
        zIndex: isSideBar ? "1" : "-1",
        background: isSideBar ? "red" : "white",
        width: "15%",
      }} */

      style={{
        width: menu ? "15%" : "8%",
        display: showMenu ? "initial" : "none",
        background: side ? "white" : "inherit",
      }}
    >
      {" "}
      <CreateContext.Provider value={iconsOne}>
        <SidebarOne menu={menu} />
        <SidebarTwo menu={menu} />
        <SidebarThree menu={menu} />
        <SidebarFour menu={menu} />
      </CreateContext.Provider>
      <p className="sidebar-summary">{menu && iconsOne.five}</p>
      <p className="sidebar-summary">{menu && iconsOne.six}</p>
      <p className="sidebar-summary">{menu && iconsOne.seven}</p>
    </section>
  );
};

const SidebarOne = ({ menu }) => {
  const mainData = useContext(CreateContext);
  return (
    <>
      {" "}
      <div className="section-one">
        {" "}
        <ul style={{}}>
          {menu
            ? mainData.one.map((item) => {
                return (
                  <li>
                    <Link to={item.url}>
                      {item.icon}
                      <article> {item.name}</article>
                    </Link>
                  </li>
                );
              })
            : mainData.one.map((item) => {
                return (
                  <li
                    style={{
                      height: "44px",
                      marginTop: "26px",
                      paddingTop: "16px",
                    }}
                  >
                    <Link
                      style={{
                        display: "block",
                        textAlign: "left",

                        /*  
                        justifyContent: "center",
                        , */
                      }}
                      to="/"
                    >
                      {item.icon}
                      <article
                        style={{
                          fontSize: "10px",
                        }}
                      >
                        {" "}
                        {item.name}
                      </article>
                    </Link>
                  </li>
                );
              })}
          {menu ? (
            ""
          ) : (
            <li
              style={
                {
                  /*   flexDirection: "column", */
                }
              }
            >
              <Link
                style={{ flexDirection: "column", marginTop: "26px" }}
                to="/"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-collection-play"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z" />
                  <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z" />
                </svg>
                <article
                  style={{
                    fontSize: "10px",
                  }}
                >
                  Library
                </article>
              </Link>
            </li>
          )}
        </ul>{" "}
      </div>{" "}
    </>
  );
};

const SidebarTwo = ({ menu }) => {
  const mainData = useContext(CreateContext);
  return (
    <>
      {" "}
      <div
        className="section-two"
        style={{ borderTop: menu ? "1px solid #0000001a" : "0" }}
      >
        <ul>
          {menu
            ? mainData.two.map((item) => {
                return (
                  <li>
                    <Link to={item.url}>
                      {item.icon}
                      <article> {item.name}</article>
                    </Link>
                  </li>
                );
              })
            : ""}
        </ul>{" "}
      </div>{" "}
    </>
  );
};

const SidebarThree = ({ menu }) => {
  const mainData = useContext(CreateContext);
  return (
    <>
      {" "}
      <div
        className="section-two"
        style={{ borderTop: menu ? "1px solid #0000001a" : "0" }}
      >
        {/*     <p>EXPLORE</p> */}
        <ul>
          {" "}
          {menu
            ? mainData.three.map((item) => {
                return (
                  <li>
                    <Link to={item.url}>
                      {item.icon}
                      <article> {item.name}</article>
                    </Link>
                  </li>
                );
              })
            : ""}
        </ul>{" "}
      </div>{" "}
    </>
  );
};

const SidebarFour = ({ menu }) => {
  const mainData = useContext(CreateContext);
  return (
    <>
      {" "}
      <div
        className="section-two"
        style={{ borderTop: menu ? "1px solid #0000001a" : "0" }}
      >
        <ul>
          {/*  <p>SETTINGS</p> */}
          {menu
            ? mainData.four.map((item) => {
                return (
                  <li>
                    <Link to={item.url}>
                      {item.icon}
                      <article> {item.name}</article>
                    </Link>
                  </li>
                );
              })
            : ""}
        </ul>{" "}
      </div>{" "}
    </>
  );
};

export default Sidebar;
