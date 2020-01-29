import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PhoneBook from '../PhoneBook/PhoneBook';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={PhoneBook} />
      </Switch>
    </>
  );
}
