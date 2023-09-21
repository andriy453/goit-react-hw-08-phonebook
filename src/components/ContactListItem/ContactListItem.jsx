import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'reduxs/contacts/operations';
import { AiOutlineDelete } from 'react-icons/ai';
import { FcBusinessman } from 'react-icons/fc';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.list_item} key={contact.id}>
      <div className={css.contact_wrp}>
        <FcBusinessman size={'1.5em'} />
        {contact.name}: {contact.number}
      </div>
      <button
        className={css.button_delete}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))} //Відправляємо action deleteContact в redux store по кліку на кнопці "Delete"
      >
        <AiOutlineDelete size={'1.5em'} />
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
