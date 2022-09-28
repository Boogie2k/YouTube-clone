import React, { useState } from "react";
import { homeData } from "./data/home-videos-data/home-videos-data";

function Explore() {
  return (
    <>
      <RowOne />
    </>
  );
}

const RowOne = () => {
  const [info, setInfos] = useState(homeData);
  return (
    <>
      <section className="youtube-content-video-row exp">
        {info.first.map((item) => {
          return (
            <div className="youtube-content-videoFrame">
              <img src={item.pictur} alt="kk " className="main-img" />
              <article>
                <img src={item.avi} alt="lll" className="logo-pic" />
                <div>
                  <h4>{item.titl}</h4>
                  <p>
                    {item.channel}
                    <br />
                    {item.views} <span>.</span> {item.time}
                  </p>
                </div>
              </article>
            </div>
          );
        })}
      </section>
      <section className="youtube-content-video-row-two">
        {info.second.map((item) => {
          return (
            <div className="youtube-content-videoFrame">
              <img src={item.pictur} alt="kk " className="main-img" />
              <article>
                <img src={item.avi} alt="lll" className="logo-pic" />
                <div>
                  <h4>{item.titl}</h4>
                  <p>
                    {item.channel}
                    <br />
                    {item.views} <span>.</span> {item.time}
                  </p>
                </div>
              </article>
            </div>
          );
        })}
      </section>

      <section className="youtube-content-video-row-four">
        {info.three.map((item) => {
          return (
            <div className="youtube-content-videoFrame">
              <img src={item.pictur} alt="kk " className="main-img" />
              <article>
                <img src={item.avi} alt="lll" className="logo-pic" />
                <div>
                  <h4>{item.titl}</h4>
                  <p>
                    {item.channel}
                    <br />
                    {item.views} <span>.</span> {item.time}
                  </p>
                </div>
              </article>
            </div>
          );
        })}
      </section>

      <section className="youtube-content-video-row-five">
        {info.four.map((item) => {
          return (
            <div className="youtube-content-videoFrame ">
              <img src={item.pictur} alt="kk " className="main-img" />
              <article>
                <img src={item.avi} alt="lll" className="logo-pic" />
                <div>
                  <h4>{item.titl}</h4>
                  <p>
                    {item.channel}
                    <br />
                    {item.views} <span>.</span> {item.time}
                  </p>
                </div>
              </article>
            </div>
          );
        })}
      </section>
    </>
  );
};

/* function Row() {
  return (
   
  );
}
  */
export default Explore;
