import express from 'express';
import Person from '../models/Person';

let router = express.Router();

router.get('/', (req, res)=> {
  Person.find((err, data)=> {
    res.send(data);
  });
});

router.get('/:id', (req, res)=> {
  Person.findOne({
    _id: req.params.id
  }, (err, data)=> {
    res.send(data);
  });
});

router.put('/:id', (req, res)=> {
  Person.update({
    _id: req.params.id
  }, req.body, (err, data)=> {
    res.send({
      error: err,
      data
    });
  });
});

router.post('/', (req, res, next)=> {
  new Person({
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
  Person.findByIdAndRemove(req.params.id, (err)=> {
    res.send({
      error: err
    });
  });
});

module.exports = router;
// export default router;