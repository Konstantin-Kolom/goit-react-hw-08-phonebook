import Section from './components/Section/Section';
import DataRecordForm from './components/DataRecordForm/DataRecordForm';
import Contacts from './components/Contacts/Contacts';
import FilterContact from './components/FilterContact/FilterContact';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Section title="Phonebook">
        <div>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
        <DataRecordForm />
        <h2>Contacts</h2>
        <FilterContact />
        <Contacts />
      </Section>
    </>
  );
}

export default App;
