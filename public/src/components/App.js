import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import SearchInput from './SearchInput';
import ResultList from './ResultList';

class App extends Component {

  render() {
    return (
        <div>
          <SearchInput />
          <ResultList />
        </div>
    );
  }
}

export default App;
