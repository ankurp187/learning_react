import React from 'react';
import {Field,reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  // renderInput(formProps){
  //   // return <input onChange={formProps.input.onChange} value = {formProps.input.value}/>;
  //   return <input {...formProps.input} />;
  //   // return <div>Hey I'm render Input function.</div>
  // }
  renderError({error,touched}){
    if(touched && error){
      return (
        <div className="ui error message">
        <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({input,label,meta}) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete = "off"/>
        {this.renderError(meta)}
      </div>
    );
  }
  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.onSubmit(formValues);
  }

  render(){
    console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
      <Field name="title" component = {this.renderInput} label="Enter Title"/>
      <Field name="description" component = {this.renderInput} label="Enter Description"/>
      <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if(!formValues.title){
    errors.title = 'You must enter the title';
  }
  if(!formValues.description){
    errors.description = 'You must enter the description';
  }
  return errors;
};


// export default reduxForm({
//   form: 'treamCreate',
//   validate:validate
// })(StreamCreate);

export default reduxForm({
  form: 'streamForm',
  validate:validate
})(StreamForm);
