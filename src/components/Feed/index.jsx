import React from "react";
import Post from "../Post";
import Tweetbox from "../Tweetbox";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* tweetbox */}
      <Tweetbox />

      {/* posts */}
      <Post />
    </div>
  );
};

export default Feed;
