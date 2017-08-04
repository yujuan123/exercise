import request from 'superagent';

const addUserMiddleware = store=>next=>action=> {
  switch (action.type) {
    case 'USERINFO_ADDED':
      request.post('/add-user')
          .type('json')
          .send(action.data)
          .end((err, res)=> {
            if (!err && res) {
              store.dispatch({
                type: 'INIT'
              })
            }
          });
      break;
  }
  next(action);
};
export default addUserMiddleware;