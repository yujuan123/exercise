/**
 * Created by yujuan on 17-8-3.
 */
import request from 'superagent';
const updateUserMiddleware = store=>next=>action=> {
  switch (action.type) {
    case 'USER_UPDATE':
      request.post('/update-user')
          .type('json')
          .send(action.userInfo)
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

export default updateUserMiddleware;