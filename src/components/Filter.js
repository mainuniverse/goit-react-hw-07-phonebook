// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// //import { getFilter } from './../redux/selectors';
// import { filterContacts, changeFilter } from './../redux/actions';

// import s from './components.module.css';


// const Filter = () => {
    
//     const value = useSelector((state) => state.filter);
//     const dispatch = useDispatch();

//     const onChange = event => {
//         dispatch(changeFilter(event.target.value));
//     };

//     return (
//         <label className={s.label}>
//             Find contact by name
//             <input type="text" value={value} onChange={onChange}></input>
//         </label>
//     );
// };

// export default Filter;

import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../redux/actions";

export const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filterPhonebook = (evt) => {
    dispatch(filterContacts(evt.target.value));
  };

  return (
    <div>
      <label>
        <input
          type="text"
          value={filter}
          placeholder="Find contacts by name"
          onChange={filterPhonebook}
        />

      </label>
    </div>
  );
};