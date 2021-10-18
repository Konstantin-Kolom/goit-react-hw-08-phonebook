import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SpinnerLoader } from '../Loader/Loader';
import { toast } from 'react-hot-toast';

import phoneAticons from '../../redux/phonebook/phonebookActions';
import { MdDeleteForever } from '../../../node_modules/react-icons/md';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/phonebook/phonebookSlice';

import s from './Contacts.module.css';

function Contacts({ open, stateApp }) {
  const { data = [], isFetching, isError } = useGetContactsQuery();
  const [delContact] = useDeleteContactMutation();

  useEffect(() => {
    if (data.length !== 0) {
      open(data);
    }
  }, [data, open]);

  function hendleClickDelet(id) {
    toast.success('Contact deleted!');
    delContact(id);
  }

  return (
    <>
      {isFetching && <SpinnerLoader />}
      {isError && <h2>Youre phonebook not found!</h2>}
      {data && (
        <ul className={s.ContactsList}>
          {stateApp.map(({ id, name, number }) => (
            <li className={s.ContactsItem} key={id} id={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button
                className={s.BtnDeletContact}
                type="button"
                onClick={() => hendleClickDelet(id)}
              >
                <span>
                  <MdDeleteForever />
                </span>
                <span>
                  {/* {isDeleting ? 'Delete...' : 'Delete'} */}
                  Delete
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
      {data && data.length === 0 && <h2>Youre phonebook is empty !</h2>}
    </>
  );
}

const getVisibleContact = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();
  return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const visibleContact = getVisibleContact(items, filter);
  return {
    stateApp: visibleContact,
  };
};

const mapDispatchToProps = dispatch => ({
  open: data => dispatch(phoneAticons.openBook(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
