import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// function component, some date in, some data out
// const SearchBar = () => {
//   // when tranform JSX, we will call React.createElement, so React will be used here
//   return <input />;
// };

class SearchBar extends Component {
  // every clss component has a state to record own state of class component
  // when state change, the class component will re-render, and the children component within this component will also re-render too. 
  // constructor is a function that will be call whenver instanciate a class compoent
  constructor(props) {
    super(props); // inherit parent component props

    // only in constructor we can initiate (set) state like this!!!
    this.state = {
      term: ''
    };
  }

  onInputChange(term) {
    const { onSearchTermChange } = this.props;
    this.setState({ term });

    onSearchTermChange(term);
  }

  // must define within a class component
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}


export default SearchBar;