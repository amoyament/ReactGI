import React, { Component } from "react";
import styles from "./Easy.module.css";

class Easy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
    };
  }

  render() {
    return (
      <div className={styles.challenge}>
        <h1>Easy Constructor</h1>
        <p>
          This is a constructor that takes in props and calls the super method. Its this.state
          contains a person property set to an empty object{" "}
        </p>
      </div>
    );
  }
}

export default Easy;
