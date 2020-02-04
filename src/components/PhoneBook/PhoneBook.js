import React, { Component } from 'react';
import PNotify from 'pnotify/dist/es/PNotify';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import Styles from './PhoneBook.module.css';
import Error from '../Error/Error';
import Title from '../Title/Title';
import '../../transition/pnotify-style.css';
import { ALL_ID } from '../../services/constants';
import {
  saveToLocalStorage,
  getToLocalStorage,
} from '../../services/localStorage';

export default class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const result =
      getToLocalStorage('localState') === null
        ? []
        : getToLocalStorage('localState');
    this.setState({ contacts: result });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      saveToLocalStorage('localState', contacts);
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { contacts } = this.state;
    const { name } = e;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      const message = `${name} is already is contacts`;
      PNotify.error({
        text: message,
        animate: {
          animate: true,
          in_class: 'bounceInDown',
          out_class: 'bounceOutUp',
        },
        animate_speed: 250,
        delay: 3000,
      });
      return;
    }
    this.setState({
      contacts: [...contacts, e],
    });
  };

  deleteContact = e => {
    const { id } = e.target;
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  };

  render() {
    const { contacts, filter } = this.state;
    const { nameId, numberId, finedId } = ALL_ID;
    const filterContacts = contacts.filter(contact => {
      const nameContact = contact.name;
      return nameContact.toLowerCase().includes(filter.toLowerCase());
    });
    return (
      <section className={Styles.section}>
        <Title size={34} animation>
          Phonebook
        </Title>
        <ContactForm
          onSubmit={this.handleSubmit}
          htmlFor={{ nameId, numberId }}
        />
        <Title size={24}>Contacts</Title>
        {contacts.length > 1 && (
          <Filter
            onChange={this.handleChange}
            htmlFor={finedId}
            value={filter}
          />
        )}
        {contacts.length > 0 && (
          <ContactList
            filterContacts={filterContacts}
            onClickDelete={this.deleteContact}
          />
        )}
        {contacts.length < 1 && <Error>Contact list is empty!</Error>}
        {filterContacts.length < 1 && contacts.length > 0 && (
          <Error>Contact not found!</Error>
        )}
      </section>
    );
  }
}
