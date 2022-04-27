import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'reactstrap';
import PersonalDetails from './PersonalDetails';
import { IPersonState } from './State';

export default class App extends React.Component {
  private defaultPerson: IPersonState = {
    Address1: '',
    Address2: null,
    County: '',
    DateOfBirth: new Date().toISOString().substring(0, 10),
    FirstName: '',
    LastName: '',
    PersonId: '',
    PhoneNumber: '',
    Postcode: '',
    Town: '',
  };

  public render() {
    return (
      <Container>
        <PersonalDetails DefaultState={this.defaultPerson} />
      </Container>
    );
  }
}
