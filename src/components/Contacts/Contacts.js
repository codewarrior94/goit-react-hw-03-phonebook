import PropTypes from 'prop-types';

import ContactsItem from './ContactsItem';
import css from './Contacts.module.css';

const Contacts = ({ contactList, deleteContact }) => {
  return (
    <>
      <ul className={css.list}>
        {contactList.map(contact => {
          return (
            <ContactsItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              deleteContact={() => deleteContact(contact.id)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};
