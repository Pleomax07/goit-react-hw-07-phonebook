import React from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations'
import { selectContacts } from '../../redux/selectors'

export function ContactForm() {
  const dispatch = useDispatch();
  const contactsInStore = useSelector(selectContacts);
  // const { items, isLoading, error } = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target.elements;
    const name = form.name.value;
    const contactName = contactsInStore.map(contact =>
      contact.name.toLowerCase()
    );
    if (contactName.includes(name.toLowerCase())) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(
      addContact({
        name: name,
        number: form.number.value,
      })
    );
    evt.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
