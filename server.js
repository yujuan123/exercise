import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', (res, req)=> {
  req.send('abc');
});

app.get('/demo', (res, req)=> {
  req.send({
    error: null,
    data: 12334
  })
});

app.listen(3000, function() {
  console.log("server started at http://localhost:3000");
});

export default app;