const people = (state=[], action)=> {
  switch(action.type) {
  case 'PEOPLE_LOADED':
    return action.data;
  }
  
  return state;
};

export default people;