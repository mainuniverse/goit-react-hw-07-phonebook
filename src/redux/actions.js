
import { createAction } from "@reduxjs/toolkit";

const changeFilter = createAction("filter/Filter");

export { changeFilter };

// import shortid from 'shortid';

// export const deleteContact = createAction('contact/delete');
// export const changeFilter = createAction('contact/changeFilter');
// export const addContact = createAction('contact/add', data => ({
//     payload: {
//         id: shortid.generate(),
//         name: data.name,
//         number: data.number,
//     },
// }));
