import React, { Component } from "react";
import styles from "./Hard.module.css";

// BasicInfo component
const BasicInfo = ({ person }) => (
  <div className={styles.infocard}>
    <h2>{person.name}'s Personal Info.</h2>
    <p>Name: {person.name}</p>
    <p>Number: {person.number}</p>
    <p>Date of Birth: {person.dateOfBirth}</p>
    <p>Spouse: {person.spouse}</p>
    <p>Children: {person.children}</p>
    <p>Favorite Color: {person.favoriteColor}</p>
    <p>Favorite Food: {person.favoriteFood}</p>
  </div>
);

class Hard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "Aubrey Celene Moya-Méndez Trotter",
          number: "704-582-1589",
          dateOfBirth: "April 4th, 1996",
          spouse: "Clayton Trotter",
          children: "Everette Dean Trotter",
          favoriteColor: "Yellow",
          favoriteFood: "Beef Combination Pho",
        },
        {
          name: "Clayton Louis Trotter",
          number: "980-287-8437",
          dateOfBirth: "March 29th, 1995",
          spouse: "Aubrey Moya-Méndez Trotter",
          children: "Everette Dean Trotter",
          favoriteColor: "Green",
          favoriteFood: "Spicy Prok Miso Ramen",
        },
        {
          name: "Everette Dean Trotter",
          number: "He is only 2, no cell phone yet!",
          dateOfBirth: "June 25th, 2021",
          spouse: "Again, he is only 2, not yet!",
          children: "See above line...",
          favoriteColor: "Red",
          favoriteFood: "Applesauce",
        },
        {
          name: "Abbey Leigh VannGlen",
          number: "252-301-4172",
          dateOfBirth: "September 10, 1996",
          spouse: "Corey Glen",
          children: "None yet",
          favoriteColor: "Purple",
          favoriteFood: "Sushi",
        },
      ],
    };
  }

  render() {
    const { people } = this.state;

    return (
      <div className={styles.mainchallenge}>
        <h1>Hard Personal Info.</h1>
        <div className={styles.challenge}>
          {/* Use the map method to iterate over the array of people like in Jonas video */}
          {people.map((person, index) => (
            <BasicInfo key={index} person={person} />
          ))}
        </div>
      </div>
    );
  }
}

export default Hard;
