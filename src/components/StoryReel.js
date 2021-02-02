import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://i.imgur.com/sjvtlq0.png"
        profileSrc="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/816/2019/06/07102723/Big-Foot-1-832-832x476.jpg"
        title="JB is Cool"
      />
      <Story
        image="https://i.imgur.com/sjvtlq0.png"
        profileSrc="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/816/2019/06/07102723/Big-Foot-1-832-832x476.jpg"
        title="A picture"
      />
      <Story
        image="https://i.imgur.com/sjvtlq0.png"
        profileSrc="https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/816/2019/06/07102723/Big-Foot-1-832-832x476.jpg"
        title="Don't eat the fish"
      />
    </div>
  );
};

export default StoryReel;
