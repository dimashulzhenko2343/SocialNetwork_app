import React from "react";
import s from "./Post.module.css";

const Post = (props) => { 

  return (
    <div className={s.item}>
      <img
        src = { props.src }
        alt=""
      />

      { props.massage }

      <div>
        <span>like</span> {props.likes}
      </div>
    </div>
  );
};

export default Post;
