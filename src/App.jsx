import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("saved-contacts")) ?? []
  );
  const [searchName, setSearchName] = useState("");
  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: crypto.randomUUID() }]);
  };
  const handleRemuveContact = (id) => {
    setContacts(contacts.filter((item) => item.id != id));
  };

  return (
    <>
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm addContact={handleAddContact} />
        <SearchBox setSearchName={setSearchName} />
      </div>
      <ContactList
        contacts={contacts.filter((item) =>
          item.name.toLowerCase().includes(searchName)
        )}
        deleteContact={handleRemuveContact}
      />
    </>
  );
}

export default App;
