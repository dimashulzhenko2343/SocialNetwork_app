import React from "react";
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts'

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
      <MyPosts />
    </div>
  );
};

export default Profile;
