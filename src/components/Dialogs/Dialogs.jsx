import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import s from "./Dialogs.module.css";

const Users = [
 {name: 'Dimych', id: 'dima'},
 {name: 'Andrey', id: 'andrey'},
 {name: 'Sveta', id: 'sveta'},
 {name: 'Maksim', id: 'maks'},
 {name: 'Vikram', id: 'vik'},
 {name: 'Anna', id: 'anna'},
]

const DialogItem = (props) => {
  // let pathName = `/dialogs/${props.id}`;
  let pathName = "/dialogs" + "/" + props.id;
  let UserName = props.name;
  return (
    <div className={s.dialog}>
      <NavLink to={pathName}>{UserName}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <DialogItem id = {Users[0].id} name = {Users[0].name}/>
        <DialogItem id = {Users[1].id} name = {Users[1].name}/>
        <DialogItem id = {Users[2].id} name = {Users[2].name}/>
        <DialogItem id = {Users[3].id} name = {Users[3].name}/>
        <DialogItem id = {Users[4].id} name = {Users[4].name}/>
        <DialogItem id = {Users[5].id} name = {Users[5].name}/>
      </div>
      <div className={s.messages}>
        {/* <Routes>
          <Route path='/dialogs/dima' element={<Message message = 'Hi'/>}/>
          <Route path='/dialogs/andrey' element={<Message message = 'Hi'/>}/>
        </Routes> */}
        <Message message = 'Hi'/>
        <Message message = 'How yre you?'/>
        <Message message = 'Good'/>
        <Message message = 'Thank you!'/>
      </div>
    </div>
  );
};

export default Dialogs;
