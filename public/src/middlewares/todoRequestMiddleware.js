import request from 'superagent';

const todoRequestMiddleware = store=> next=> action=> {

  if (!action.type) {
    return next(action);
  }

  switch (action.type) {
  case 'ADD_TODO':
    return request.post('/todos')
        .type('form')
        .send({
          text: action.text
        })
        .end(()=> {
          store.dispatch({
            type: 'INIT'
          });
        });
  case 'INIT':
    return request.get('/todos')
        .end((err, res)=> {
          next({
            type: 'TODO_LOADED',
            data: res.body
          });
        });
  case 'DELETE_TODO':
    return request.delete('/todos/' + action.id)
        .end(()=> {
          store.dispatch({
            type: 'INIT'
          });
        });
  default:
    return next(action);
  }
};

export default todoRequestMiddleware;
