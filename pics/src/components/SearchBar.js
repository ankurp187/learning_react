import React from 'react';

class SearchBar extends React.Component{
  // onInputChange(event){
  //   console.log(event.target.value);
  // }
  // sampletext = {<input type="text" onChange={this.onInputChange} /><input type="text" onChange={(event) => console.log(event.target.value)} />}

  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  }

  //  GIVES ERROR ... so we used error function to bind
  // OR we can create a constructor and to bind we can use
  // this.state = this.state.bind(this);
  // onFormSubmit(event){
  //   event.preventDefault();
  //   console.log(this.state.term);
  // }
  // OR we can use the arrow function as we are doing in onChange
  // like .... onSubmit={event => this.onFormSubmit(event)}


  state = {term:'' };

  render(){
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term} onChange={(e) => this.setState({term:e.target.value})} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
