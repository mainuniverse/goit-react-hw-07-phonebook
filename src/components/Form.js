// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import shortid from 'shortid';
// import { toast } from 'react-toastify';
// import { addContact } from './../redux/actions';
// import { getContacts } from './../redux/selectors';

import React from "react";
import 'react-toastify/dist/ReactToastify.css';
//import s from './components.module.css';
import { usePostContactMutation } from "../services/api";

export const Form = () => {
    const [submitForm] = usePostContactMutation();
    
    
    return (
    <form
      onSubmit={(e) => {
        const form = e.target;
        const name = form.name.value;
        const phone = form.number.value;
        e.preventDefault();
        form.reset();
        return submitForm({ name, phone });
      }}
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="add real name"
          placeholder="add name"
          required
        />
      </label>
      <label>
        {" "}
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="check number"
          placeholder="add phone "
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};


// function Form() {
//     const allContacts = useSelector(getContacts);
//     const dispatch = useDispatch();
//     const [newContact, setNewContact] = useState({ name: '', number: '' });
//     const { name, number } = newContact;

//     const handleChange = event => {
//         const { name, value } = event.target;
//         setNewContact({
//             ...newContact,
//             [name]: value,
//         });
//     };

//     const handleSubmit = event => {
//         event.preventDefault();
//         allContacts.find(
//             el => el.name.toLowerCase() === normalizedValue(newContact.name),
//         )
//             ? notify(`${newContact.name} is already added`)
//             : dispatch(addContact(newContact));

//         setNewContact({ name: '', number: '' });
//     };

//     const normalizedValue = value => {
//         return value.toLowerCase();
//     };

//     const notify = message =>
//         toast(message, {
//             position: toast.POSITION.TOP_CENTER,
//             className: s.toast,
//         });

//     const nameInputId = shortid.generate();
//     const numberInputId = shortid.generate();

        
        
//         <div>
//             <form onSubmit={handleSubmit} className={s.form}>
//                 <label htmlFor={nameInputId} className={s.label}>
//                     Name
//                     <input
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="add real name"
//                         required
//                     />
//                 </label>
//                 <label className={s.label}>
//                     Number
//                     <input
//                         type="tel"
//                         name="number"
//                         value={number}
//                         onChange={handleChange}
//                         id={numberInputId}
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="check number"
//                         required
//                     />
//                 </label>
//                 <button type="submit" className={s.button}>
//                     Add contact
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default Form;