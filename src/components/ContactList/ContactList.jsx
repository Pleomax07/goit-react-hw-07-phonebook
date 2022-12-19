import ContactListItem from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getStatusFilter } from '../../redux/selectors';

const ContactList = () => {
  const allContacts = useSelector(getStatusFilter);
  const contacts = useSelector(getContacts);
  console.log(contacts);
  // console.log(allContacts);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(allContacts)
  );
  // console.log(visibleContacts)
  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactListItem
          key={name}
          name={name}
          number={number}
          id={id}
          // onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
