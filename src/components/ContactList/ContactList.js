import React from "react";
import PropTypes from "prop-types";
import ContactUl from "./ContactListStyled";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ContactUl>
      {contacts.map(({ id, name, number }) => (
        <li className="contactList__item" key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            className="delBtn"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ContactUl>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
