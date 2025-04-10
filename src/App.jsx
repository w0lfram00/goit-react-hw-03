import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchName, setSearchName] = useState("");
  useEffect(() => {
    localStorage.setItem();
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: crypto.randomUUID() }]);
  };
  const handleRemuveContact = (id) => {
    setContacts(contacts.filter((item) => item.id != id));
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox setSearchName={setSearchName} />
      <ContactList
        contacts={contacts.filter((item) =>
          item.name.toLowerCase().includes(searchName)
        )}
        deleteContact={handleRemuveContact}
      />
    </div>
  );
}

export default App;
