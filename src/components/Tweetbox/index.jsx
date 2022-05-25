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
          <input placeholder="Enter image URL" type="text" />
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
};

export default Tweetbox;
