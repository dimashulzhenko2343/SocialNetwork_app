import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://mobimg.b-cdn.net/v3/fetch/5a/5a1990d39181006d97036d8ba802b48a.jpeg?w=800&r=0.5625"
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>Ava + description</div>
    </div>
  );
};

export default ProfileInfo;
