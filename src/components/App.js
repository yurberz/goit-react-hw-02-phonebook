import React, { Component } from "react";
import Container from "./AppStyled";
import shortid from "shortid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in use`);
    } else if (contacts.find((contact) => contact.number === number)) {
      alert(`${number} is already in use`);
    } else if (name.trim() === "" || number.trim() === "") {
      alert("Enter the contact's name and(or) phone number!");
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      alert("Enter the correct phone number");
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  delContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  getContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  changeFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getContacts();

    return (
      <Container>
        <h1 className="h1Title">Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2 className="h2Title">Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.changeFilter} />
        )}
        {contacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.delContact}
          />
        ) : (
          <p className="text">Your phonebook is empty. Please add contact.</p>
        )}
      </Container>
    );
  }
}

export default App;
