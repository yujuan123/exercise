const students = (state=[], action)=> {
  console.log(action);
  return [{
    name: '赵琪琪'
  }, {
    name: '张培'
  }, {
    name: '崔倩'
  }]
};

export default students;