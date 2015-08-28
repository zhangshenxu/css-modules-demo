import styles from './App.css';

import React, { Component } from 'react';

import Button from './Button/Button';

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <h1>CSS Modules Demo</h1>
        <Button style='success'/>
      </div>
      
    );
  }

};
