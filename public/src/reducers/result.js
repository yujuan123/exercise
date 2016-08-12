const result = (state = [], action)=> {
  switch (action.type) {
  case 'READY':
    return action.data;
  case 'INIT':
    return [];
  }

  return state;
};

export default result;