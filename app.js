import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';

const app = express();

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'));


//初始化数据库配置
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hhxx',//自己的密码
  database: 'user'//自己创建的数据库名:user数据库里的User
});
//连接数据库
connection.connect(function (err) {
  if (err) {
    console.log("err" + err.stack);
    return;
  }
  console.log("connection id" + connection.threadId);
});

/*获取用户信息*/
app.get('/all', (req, res)=> {
  connection.query('select *from User', (err, results)=> {
    if (err) {
      throw err;
    }
    res.send(results);
  })
});
app.listen(3000, function () {
  console.log('server started at http://localhost:3000'); // eslint-disable-line no-console
});

export default app;