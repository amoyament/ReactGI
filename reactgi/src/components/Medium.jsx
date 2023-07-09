import React, { Component } from "react";
import styles from "./Medium.module.css";

// BasicInfo component
const BasicInfo = ({ person }) => (
  <div className={styles.challenge}>
    <h1>Medium Personal Info.</h1>
    <p>Name: {person.name}</p>
    <p>Number: {person.number}</p>
    <p>Date of Birth: {person.dateOfBirth}</p>
    <p>Spouse: {person.spouse}</p>
    <p>Children: {person.children}</p>
    <p>Favorite Color: {person.favoriteColor}</p>
    <p>Favorite Food: {person.favoriteFood}</p>
  </div>
);

class Medium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "Aubrey Celene Moya-Méndez Trotter",
        number: "704-582-1589",
        dateOfBirth: "April 4th, 1996",
        spouse: "Clayton Trotter",
        children: "Everette Dean Trotter",
        favoriteColor: "Yellow",
        favoriteFood: "Beef Combination Pho",
      },
    };
  }

  render() {
    const { person } = this.state;

    return <BasicInfo person={person} />;
  }
}

export default Medium;
