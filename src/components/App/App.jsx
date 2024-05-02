import React, { Component } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { nanoid } from 'nanoid';
import styles from './App.module.css';
/* 
const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []); 

  const addContact = (name, number) => {
    const trimmedName = name.trim();
    const isDuplicate = contacts.some(contact => contact.name.toLowerCase() === trimmedName.toLowerCase());

    if (isDuplicate) {
      alert(`${trimmedName} is already in contacts!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: trimmedName,
      number
    };

    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts); 
    localStorage.setItem('contacts', JSON.stringify(updatedContacts)); 
  };

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts); 
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
}
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: ''
    };
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const trimmedName = name.trim();
    const isDuplicate = contacts.some(contact => contact.name.toLowerCase() === trimmedName.toLowerCase());

    if (isDuplicate) {
      alert(`${trimmedName} is already in contacts!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: trimmedName,
      number
    };

    const updatedContacts = [...contacts, newContact];
    this.setState({ contacts: updatedContacts });
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  handleDelete = (id) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatedContacts });
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDelete={this.handleDelete} />
      </div>
    );
  }
}
export default App;