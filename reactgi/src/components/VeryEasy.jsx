import React, { Component } from "react";
import styles from "./VeryEasy.module.css";

class VeryEasy extends Component {
  render() {
    return (
      <div className={styles.challenge}>
        <h1>VeryEasy Personal Info.</h1>
        <p>Name: Aubrey Celene Moya-Méndez Trotter</p>
        <p>Number: 704-582-1589</p>
        <p>Date of Birth: April 4th, 1996</p>
        <p>Spouse: Clayton Trotter</p>
        <p>Children: Everette Dean Trotter</p>
        <p>Favorite Color: Yellow</p>
        <p>Favorite Food: Beef Combination Pho</p>
      </div>
    );
  }
}

export default VeryEasy;
