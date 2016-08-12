import request from 'superagent';

const result = (state=[], action)=> {
  switch(action.type) {
    case "READY":
      return action.data;
    case "INIT":
      return [];

    case "SELECT_LINE":
      return state.concat({
        id: count++,
        name: "zyz",
        price: 890
      });
  }
  
  return state;
};

export default result;