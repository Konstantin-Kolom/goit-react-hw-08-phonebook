// import { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Navigation } from './components/Novigation/Novigation';
// import UserMenu from './components/UserMenu/UserMenu';
import HomePageViews from './views/HomePageViews';
import RegisterViews from './views/RegisterViews';

import Section from './components/Section/Section';
import DataRecordForm from './components/DataRecordForm/DataRecordForm';
import Contacts from './components/Contacts/Contacts';
import FilterContact from './components/FilterContact/FilterContact';

// const HomePageViews = lazy(() =>
//   import('./views/HomePageViews' /* webpackChunkName: "Home-views" */),
// );

function App() {
  return (
    <>
      <header className="App-header">
        <Navigation />
        {/* <UserMenu /> */}
      </header>

      <Switch>
        <Route exact path="/">
          <HomePageViews />
        </Route>

        <Route path="/register">
          <RegisterViews />
        </Route>

        {/* <Route path="/login"></Route> */}

        <Route path="/contacts">
          <Section title="Phonebook">
            <div>
              <Toaster position="top-right" reverseOrder={false} />
            </div>
            <DataRecordForm />
            <h2>Contacts</h2>
            <FilterContact />
            <Contacts />
          </Section>
        </Route>
        {/* 
        <Route path="*">
          <Redirect to="/" />
          <HomePageViews />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
