
import React from "react";
import { Contact } from "./Contact";
import s from './components.module.css';

export const ContactList = () => {
  return (
    <div  className={s.container}>
      <ul>
        <Contact />
      </ul>
    </div>
  );
};
