import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { users } from "../../data/users";
import s from "./Dialogs.module.css";

const messageData = [
  { message: "Hi", id: 1 },
  { message: "How yre you?", id: 2 },
  { message: "Good", id: 3 },
];

const DialogItem = (props) => {
  let pathName = props.id;
  let UserName = props.name;
  const setActive = ({ isActive }) => (isActive ? s.dialogActive : "");
  return (
    <div className={s.dialog}>
      <NavLink to={pathName} className={setActive}>
        {UserName}
      </NavLink>
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
    </div>
  );
};

export default Dialogs;
