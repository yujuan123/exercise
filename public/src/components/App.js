import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import AddTodo from '../container/AddTodo';
import ResultList from './ResultList';
import People from './People';

class App extends Component {

  render() {
    return (
        <div>
          <People/>
          <AddTodo />
          <ResultList />
        </div>
    );
  }
}

export default App;
