import request from 'superagent'
const searchUserMiddleware = store=>next=>action=> {
  switch (action.type) {
    case 'SEARCH':
      request.post('/select-user/')
          .send(action.username)
          .end((err, res)=> {
              next({
                type: 'USER_LOADED',
                data: res.body
              })
          });
      break;

  }
  next(action);
};

export default searchUserMiddleware;