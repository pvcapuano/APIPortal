import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"933354946111705097"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="pvcapuano"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://github.com/pvcapuano"}
          options={{ text: "#reactjs is awesome", via: "pvcapuano" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
