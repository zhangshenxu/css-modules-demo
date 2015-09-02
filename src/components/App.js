import styles from './App.css';

import React, { Component } from 'react';

import Button from './Button/Button';
import Demo from './Demo/Demo';

export default class App extends Component {

  render() {
    return (
      <div className={styles.app}>
        <h1>CSS Modules Demo</h1>
        <p className="text">button demo</p>
        <Button style='success'/>
        <Button style='warning'/>
        <Button />
        <Demo />
      </div>
      
    );
  }

};
