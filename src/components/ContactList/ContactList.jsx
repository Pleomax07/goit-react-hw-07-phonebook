import ContactListItem from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectStatusFilter } from '../../redux/selectors';

const ContactList = () => {
  const filter = useSelector(selectStatusFilter);
  const contacts = useSelector(selectContacts);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactListItem key={name} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};
export default ContactList;
