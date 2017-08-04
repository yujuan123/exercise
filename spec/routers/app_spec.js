import app from '../../app';
import request from 'supertest';
import db from '../../setSql';

describe('get /all', ()=> {
  it('should return all users', (done)=> {
    request(app)
        .get('/all')
        .end((err, res)=> {
          if (err) {
            done.fail(err);
          } else {
            expect(res.status).toEqual(200);
            done();
          }
        })
  });

});

describe('post /add-user', ()=> {
  let user;

  beforeEach(()=> {
    user = {
      username: 'zhangsan',
      name: 'zhang',
      sex: '男',
      age: 20,
      phone: '18902354526',
      email: 'said@163.com',
      note: 'happy'
    }
  });

  afterEach(()=> {
    db.query("delete from User where username = ?", user.username)
  });

  it('should return add success', (done)=> {
    request(app)
        .post('/add-user')
        .send(user)
        .end((err, res)=> {
          if (err) {
            done.fail(err);
          } else {
            expect(res.text).toEqual("insert success");
            done();
          }
        })
  })
});

describe('post /update-user', ()=> {
  let user;

  beforeEach(()=> {
    user = {
      userId: 1,
      userMess: {
        username: 'zhangsan',
        name: 'zhang',
        sex: '女',
        age: 20,
        phone: '18902354526',
        email: 'said@163.com',
        note: 'happy'
      }
    }
  });
  afterEach(()=> {
    db.query("delete from User where id = ?", user.userId)
  });
  it('should return update success', (done)=> {
    request(app)
        .post('/update-user')
        .send(user)
        .end((err, res)=> {
          if (err) {
            done.fail(err);
          } else {
            expect(res.text).toEqual("update success");
            done();
          }
        })
  })
});


