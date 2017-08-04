import mysql from 'mysql';
//初始化数据库配置
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',//自己的密码
  database: 'user'//自己创建的数据库名:user数据库里的User
});

export default connection;
