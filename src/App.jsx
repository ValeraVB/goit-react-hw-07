import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectFilteredContacts } from "./redux/contactsSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContaсtList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchContacts());
        console.log("Contacts fetched successfully");
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
