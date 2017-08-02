/**
 * Created by yujuan on 17-8-2.
 */
import request from 'superagent';
const userLoadedMiddleware = store=>next=>action=> {
  switch (action.type) {
    case 'INIT':
      request.get('/')
          .end((err,res)=>{
            next({
              type: 'USER_LOADED',
              data: res.body
            })
          });
      break;
  }
  next(action);
};

export default userLoadedMiddleware;
  
