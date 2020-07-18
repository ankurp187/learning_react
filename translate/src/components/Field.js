import React from 'react';
import LanguageContext from '../Contexts/LanguageContext';


class Field extends React.Component{

  static contextType = LanguageContext;

  render(){

    const text = this.context === 'english' ? 'Name' : 'Naam';
    console.log(text);
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
