import request from 'superagent';

const todoRequestMiddleware = ()=> next=> action=> {

  if (!action.type || action.type !== 'ADD_TODO') {
    return next(action);
  }

  return request.post('/todos')
      .type('form')
      .send({
        text: action.text
      })
      .end((err, res)=> {
        next({
          type: 'TODO_ADDED',
          data: res.body
        });
      });
};

export default todoRequestMiddleware;
