import React, {Component} from "react";
// do not need to import ReactDOM here because we are not posting anything to the DOM

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  render(){
    return (
      <div>
        <input
          value={this.state.term}
          onChange={ (event) => {this.setState({term: event.target.value})}} />
      </div>
    );
  }
}

export default SearchBar;
