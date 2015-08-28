import styles from './Button.css';

import React, { Component } from 'react';

export default class Button extends Component {

  render() {
    let className, text = 'Button';
    if(this.props.style == 'warning') {
      className = styles.warning;
      text = 'warning';
    }else if(this.props.style == 'success') {
      className = styles.success;
      text = 'success';
    }else {
      className = styles.primary;
    }
    return <button className={className} type='button'>{text}</button>;
  }

};
