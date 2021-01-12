import React, { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: "", number: "" });
  };

  handleChange = (evt) => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form
        className={styles.contactForm}
        id="contact"
        onSubmit={this.handleSubmit}
      >
        <label className={styles.label} htmlFor={this.nameInputId}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
            placeholder="Type to name"
          />
        </label>

        <label className={styles.label} htmlFor={this.numberInputId}>
          Phone number
          <input
            className={styles.input}
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
            placeholder="Type to phone(e.g. 111-11-11)"
          />
        </label>

        <button type="submit" className={styles.submitBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
