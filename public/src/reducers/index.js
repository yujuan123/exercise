import { combineReducers } from 'redux';
import result from './result';
import students from './students';

const resultList = combineReducers({
  result,
  students
});

export default resultList;
