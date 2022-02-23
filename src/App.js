import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "./App.css";
import React, { Component } from "react";
import { ContactForm } from "./components/Form";
import { ContactList } from "./components/ContactList";
import { Filter } from "./components/Filter";
//import Filter from './components/Filter';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
         <ToastContainer />
      </div>
    );
  }
}