import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

  //static contextType = LanguageContext;
  //this is how to hook up a context object to a class component
  //only needed when using this.context, not with Consumer
  //Should use Consumer when pulling data from multiple context objects
  //Can use this.context when only pulling from one context object



  render(){
    //const text = this.context === 'english' ? 'Submit' : 'Vorlegen'
    return (
      <ColorContext.Consumer>
        {(color) =>
          <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {({ language }) => language === 'english' ? 'Submit' : 'Vorlegen'}
          </LanguageContext.Consumer>
          </button>
        }
      </ColorContext.Consumer>
    );
  }
}

export default Button;
