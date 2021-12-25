import PropTypes from 'prop-types';

import css from './Contacts.module.css';

const ContactsItem = ({ name, number, deleteContact }) => {
  return (
    <li className={css.item}>
      <p>
        • {name}: <span>{number}</span>
      </p>
      <button onClick={deleteContact} type="button" className={css.btn}>
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};

export default ContactsItem;
