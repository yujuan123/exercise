import request from 'superagent';

const peopleRequestMiddleware = store=> next=> action=> {
  
  switch (action.type) {
  case 'INIT':
    request.get('/people')
        .end((err, res)=> {
          next({
            type: 'PEOPLE_LOADED',
            data: res.body
          });
        });
    break;
  }
  
  next(action);
};

export default peopleRequestMiddleware;