import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/student');

var Student = mongoose.model('Student', { name: String });

const app = express();

app.use(express.static('public'));

app.get('/create', (req, res)=> {
  let s1 = new Student({
    name: 'aaaabb'
  });
  s1.save((err)=> {
    if(err) {
      res.send(err);
    } else {
      res.send('喵');
    }

  });

});

app.get('/demo', (res, req)=> {
  Student.find()
      .exec((err, data)=> {
        req.send(data);
      });
});

app.listen(3000, function() {
  console.log('server started at http://localhost:3000'); // eslint-disable-line no-console
});

export default app;