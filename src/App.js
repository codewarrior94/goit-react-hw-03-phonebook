import { Component } from 'react';
import { nanoid } from 'nanoid';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';

// import css from './App.module.css';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class App extends Component {
  state = { ...INITIAL_STATE };

  onFormSubmit = data => {
    this.addContact(data);
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    this.verifyContact(data)
      ? alert(`${data.name} already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  verifyContact = data => {
    const { contacts } = this.state;

    return contacts.some(contact => contact.name === data.name);
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normFilter));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <Header name="Phonebook" />
        <Form onSubmit={this.onFormSubmit} />

        <Header name="Contacts" />
        <p>Find contacts by name:</p>
        <input type="text" onChange={this.handleInputChange} name="filter" value={filter} />

        <Contacts contactList={this.filterContact()} deleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
