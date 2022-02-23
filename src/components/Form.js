import React from "react";
import { usePostContactMutation } from "../services/api";

export const ContactForm = () => {
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
          placeholder="add phone "
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

