import request from 'superagent';

const getStudentMiddleware = ()=> {
  return (next)=> {
    return (action)=> {

      if(!action.type || action.type !== 'INIT') {
        return next(action);
      }

      next({
        type: 'PENDDING'
      });

      return request.get('/demo')
          .end((err, res)=> {
            next({
              type: 'READY',
              data: res.body
            });
          });
    };
  };
};

export default getStudentMiddleware;
