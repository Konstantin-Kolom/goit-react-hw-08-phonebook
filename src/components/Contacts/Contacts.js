import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerLoader } from '../Loader/Loader';
import { toast } from 'react-hot-toast';

import phoneAticons from '../../redux/phonebook/phonebookActions';
import { MdDeleteForever } from '../../../node_modules/react-icons/md';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/phonebook/phonebookSlice';

import s from './Contacts.module.css';

export default function Contacts() {
  const [stateApp, setStateApp] = useState([]);

  const { items, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const { data = [], isFetching, isError } = useGetContactsQuery();
  const [delContact] = useDeleteContactMutation();

  const dispatchToProps = () => dispatch(phoneAticons.openBook(data));

  const getVisibleContact = (allItems, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return allItems.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  };

  useEffect(() => {
    if (data.length !== 0) {
      dispatchToProps();
      setStateApp(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const visibleContact = getVisibleContact(items, filter);

    if (filter !== '') {
      return setStateApp(visibleContact);
    } else {
      setStateApp(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, items]);

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
                <span className={s.BtnDeletContactSvg}>
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
      {filter !== '' && stateApp.length === 0 && (
        <h2>There is no contact in the phone book - {filter}!</h2>
      )}
    </>
  );
}
