import express from 'express';
import Todo from '../models/Todo';

let router = express.Router();

router.get('/', (req, res)=> {
  Todo.find((err, data)=> {
    res.send(data);
  });
});

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

router.delete('/:id', (req, res)=> {
  Todo.findByIdAndRemove(req.params.id, (err)=> {
    res.send({
      error: err
    });
  });
});

module.exports = router;
// export default router;