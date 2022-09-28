import React, { useEffect, useState } from "react";
import { sectionOne } from "./data/sidebar-data/sidebar-data";

const Navbar = ({ click }) => {
  const [close, setClose] = useState(sectionOne);

  return (
    <nav className="youtube-clone-navbar">
      <article className="logo">
        <div className="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
            onClick={click}
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>

        <img
          src="https://www.gstatic.com/youtube/img/promos/growth/a7e1c4fce4bf34c2f90aafbe6c3660ed38e99eac3483c310306a77c72170b4a4_122x56.png"
          alt="logo"
        />
      </article>

      <article className="search">
        <div className="to-search">
          <form>
            <div className="search-bar">
              <input
                type="text"
                placeholder="search"
                className="search-input"
              />{" "}
            </div>
          </form>
          <button className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <div className="mic-div">
          <button className="mic">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-mic-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
              <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
            </svg>
          </button>
        </div>
      </article>
      <article className="profile-bar">
        <div>
          <div className="add-video">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-camera-video"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
              />
            </svg>
          </div>
          <div>
            <div className="notification">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>{" "}
              <span className="badge">1</span>
            </div>
          </div>
          <button className="pfp">
            <img
              src="https://yt3.ggpht.com/yti/AJo0G0lr8k12GVRHgj3cQ-xrejHsg3KoO3Mt67G431dz=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="pfp"
            />
          </button>
        </div>
      </article>
    </nav>
  );
};

export default Navbar;
