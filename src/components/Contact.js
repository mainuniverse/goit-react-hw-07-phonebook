
import React from "react";
import { useSelector } from "react-redux";
import {
  useDeleteContactByIdMutation,
  useGetContactsQuery,
} from "../services/api";
import s from './components.module.css';
 
const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.phone.includes(filter)
  );
};
export const Contact = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactByIdMutation();
  const filter = useSelector((state) => state.filter);
  return (
    <>
      {error ? (<>Error</>) : isLoading ? (<>Loading...</>) : data ? (
        <>
          {getVisibleContacts(data, filter).map(({ id, name, phone }) => (
            <li key={id} className={s.contactItem}>
              {name} : {phone}
              <button className={s.buttonDelete} type="button" onClick={() => deleteContact(id)}>
                Delete
              </button>
            </li>
          ))}
        </>
      ) : null}
    </>
  );
};

// import PropTypes from 'prop-types';
// import s from './components.module.css';

// function Container({ children }) {
//     return <div className={s.container}>{children}</div>;
// }

// Container.propTypes = {
//     children: PropTypes.node,
// };

// export default Container;