import React from "react";

const Topics = () => {
  const topics = [
    "All",
    "Live",
    "Gaming",
    "sports",
    "music",
    "footbal",
    "rap",
    "Tech",
  ];
  return (
    <>
      <div className="youtube-clone-topics">
        <ul>
          {topics.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Topics;
