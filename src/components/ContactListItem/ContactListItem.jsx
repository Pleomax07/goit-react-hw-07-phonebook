import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

const ContactListItem = ({ id, name, number }) => {
 
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contactListItem}>
      {name}: {number}
      <button
        className={css.button}
        type="button"
        id={id}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};
export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
