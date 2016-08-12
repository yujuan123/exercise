import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import App from './components/App';
import resultList from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(resultList);

render(
    <Provider store={store}>
      <App/>
    </Provider>,
  document.getElementById('app')
);