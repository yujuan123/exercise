/**
 * Created by yujuan on 17-8-2.
 */
import request from 'superagent';
const deleteUserMiddleware = store=>next=>action=> {
  switch (action.type) {
    case 'USER_DELETED':
      request.post(`/delete-user/${action.userId}`)
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

export default deleteUserMiddleware;