import { Toaster } from 'react-hot-toast';
import Section from '../Section/Section';
import DataRecordForm from '../DataRecordForm/DataRecordForm';
import FilterContact from '../FilterContact/FilterContact';
import Contacts from '../Contacts/Contacts';

export default function PhoneBook() {
  return (
    <Section title="Phonebook">
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <DataRecordForm />
      <h2>Contacts</h2>
      <FilterContact />
      <Contacts />
    </Section>
  );
}
