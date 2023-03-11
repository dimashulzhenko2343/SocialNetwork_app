import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { users } from "../../data/users";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let pathName = props.id;
  let UserName = props.name;
  return (
    <div className={s.dialog}>
      <NavLink to={pathName}>{UserName}</NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <DialogItem id={users[0].id} name={users[0].name} />
        <DialogItem id={users[1].id} name={users[1].name} />
        <DialogItem id={users[2].id} name={users[2].name} />
        <DialogItem id={users[3].id} name={users[3].name} />
        <DialogItem id={users[4].id} name={users[4].name} />
        <DialogItem id={users[5].id} name={users[5].name} />
      </div>

      <Outlet />

      {/* <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How yre you?" />
        <Message message="Good" />
        <Message message="Thank you!" />
      </div> */}
    </div>
  );
};

export default Dialogs;
