import { ContactForm } from './ContactForm/ContactForm';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactList from './ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading, selectContacts } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const allContactsSumm = useSelector(selectContacts).length;

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
        <h2>Contacts ({allContactsSumm})</h2>
        <ContactFilter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </div>
    </>
  );
}
