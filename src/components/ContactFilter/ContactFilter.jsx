import { useDispatch, useSelector } from 'react-redux';
import { getStatusFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

const ContactFilter = () => {
  const visibleContacts = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const onChangeFilter = evt => {
    const searchContact = evt.target.value;
    console.log(searchContact);
    dispatch(setFilter(searchContact.toLowerCase()));
  };

  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={visibleContacts} onChange={onChangeFilter} />
    </label>
  );
};

export default ContactFilter;
