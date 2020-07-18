import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  // renderInput(formProps){
  //   // return <input onChange={formProps.input.onChange} value = {formProps.input.value}/>;
  //   return <input {...formProps.input} />;
  //   // return <div>Hey I'm render Input function.</div>
  // }


  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.createStream(formValues);
  }
  render(){
    console.log(this.props);
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}


// export default reduxForm({
//   form: 'treamCreate',
//   validate:validate
// })(StreamCreate);


export default connect(null, {createStream})(StreamCreate);
