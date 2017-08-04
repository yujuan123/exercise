/**
 * Created by yujuan on 17-8-2.
 */
const regRouter = function(app){
  app.use('/', require('./users'));
};

module.exports = regRouter;