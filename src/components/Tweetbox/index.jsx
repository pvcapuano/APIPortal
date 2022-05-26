import React from "react";
import { Avatar, Button } from "@mui/material";
import "./Tweetbox.css";

const Tweetbox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars.githubusercontent.com/u/10540844?v=4" />
          <input placeholder="Whats happening?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default Tweetbox;
