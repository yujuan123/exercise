import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import AddTodo from '../container/AddTodo';
import ResultList from './ResultList';
import PeopleList from '../container/PeopleList';

class App extends Component {

  render() {
    return (
        <div>
          <PeopleList />
          <AddTodo />
          <ResultList />
        </div>
    );
  }
}

export default App;
