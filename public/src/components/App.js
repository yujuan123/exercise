import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import SearchInput from './SearchInput';
import ResultList from './ResultList';
import StudentList from './StudentList';

class App extends Component {

  render() {
    return (
        <div>
          <SearchInput />
          <ResultList />
          <StudentList />
        </div>
    );
  }
}

export default App;
