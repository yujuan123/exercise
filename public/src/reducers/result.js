let defaultResult = [{
  id: 1,
  name: 'aaa',
  price: 100
}, {
  id: 2,
  name: 'abc',
  price: 99
}, {
  id: 3,
  name: 'zzz',
  price: 888
}];

let count = 4;

const result = (state=[], action)=> {
  switch(action.type) {
    case "SELECT_LINE":
      return state.concat({
        id: count++,
        name: "zyz",
        price: 890
      });
  }
  
  return defaultResult;
};

export default result;