import React from 'react';
import LanguageContext from '../Contexts/LanguageContext';
import ColorContext from '../Contexts/ColorContext';

//USING THIS.CONTEXT
/*
class Button extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context === 'english'?'Submit':'Voorleggen';
    return <button className="ui button primary">{text}</button>;
  }
}
*/

//USING CONSUMER
class Button extends React.Component {
  renderSubmit(value){
    return value === 'english'?'Submit':'Voorleggen';
  }

  render() {
    return (
      <ColorContext.Consumer>
      {(color) =>(
        <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {(value) => this.renderSubmit(value) }
          </LanguageContext.Consumer>
        </button>
      )}
      </ColorContext.Consumer>
    );
  }
}


export default Button;
