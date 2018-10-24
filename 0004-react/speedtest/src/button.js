import React, { Component } from 'react';
import './button.css';

class Button extends Component { this
  render() {
    return(
        <div className={"button" + (this.props.active ? "active" : "") }  onClick={ this.props.clickHandler }> 
          { this.props.label }</div>
    );
  }
}

export default Button;
