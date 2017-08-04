import express from 'express';
import bodyParser from 'body-parser';
import connection from './setSql';
import regRouter from './routers/regRouter';
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

regRouter(app);

//连接数据库
connection.connect(function (err) {
  if (err) {
    console.log("err" + err.stack);
    return;
  }
  console.log("connection id" + connection.threadId);
});


app.listen(3000, function () {
  console.log('server started at http://localhost:3000'); // eslint-disable-line no-console
});

export default app;