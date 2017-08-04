/**
 * Created by yujuan on 17-8-2.
 */

import express from 'express';
const router = express.Router();
import connection from '../setSql';



/*获取用户信息*/
router.get('/all', (req, res)=> {
  connection.query('select *from User', (err, results)=> {
    if (err) {
      throw err;
    }
    res.send(results);
  })
});


/*添加用户*/
router.post('/add-user', (req, res)=> {
  connection.query('insert into `User` set ?', req.body, (err, results)=> {
    if (err) {
      throw err;
    }
    res.send("insert success");
  })
});

/*更新用户*/
router.post('/update-user', (req, res)=> {
  connection.query('update `User` set ? where id = ' + req.body.userId, req.body.userMess, (err, results)=> {
    if (err) {
      throw  err;
    }
    res.send("update success");
  })
});
/*查找用户:根据用户名查找*/
router.post('/select-user/', function (req, res) {
  var username = req.body.username;
  var sql;
  if (username == "") {
    sql = "select *from `User`";
  } else {
    sql = "select *from `User` where username like '%" + username + "%'";
  }
  connection.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    if (results) {
      res.send(results);
    } else {
      res.send(false);
    }
  });
});

/* 删除用户*/
router.post('/delete-user/:userId', (req, res)=> {
  var userId = req.params.userId;
  var sql = "DELETE FROM `User` WHERE id = " + userId;
  connection.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    if (results) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
});
module.exports = router;