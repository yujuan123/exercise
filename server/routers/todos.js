import express from 'express';
import Todo from '../models/Todo';

let router = express.Router();

router.post('/', (req, res, next)=> {
  new Todo({
    text: req.body.text
  }).save((err, todo) => {
    if(err) {
      return next(err);
    } else {
      res.send(todo);
    }
  });
});

module.exports = router;
// export default router;