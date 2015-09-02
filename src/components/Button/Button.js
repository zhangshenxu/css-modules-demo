import styles from './Button.css';

import React, { Component } from 'react';

export default class Button extends Component {

  render() {
    let className, text = 'Button';
    switch (this.props.style) {
      case 'warning':
        className = styles.warning;
        text = 'Warning';
        break;
      case 'success':
        className = styles.success;
        text = 'Success';
        break;
      default:
        className = styles.primary;
    }

    return <button className={className} type='button'>{text}</button>;
  }

};
