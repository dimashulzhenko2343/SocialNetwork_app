import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://mobimg.b-cdn.net/v3/fetch/5a/5a1990d39181006d97036d8ba802b48a.jpeg?w=800&r=0.5625"
          alt=""
        />
      </div>
      <div>Ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>post 1</div>
          <div className={s.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
