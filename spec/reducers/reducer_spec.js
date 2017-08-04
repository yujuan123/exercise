/**
 * Created by yujuan on 17-8-4.
 */
const expect = require('chai').expect;
import loadAllUsers from '../../public/src/reducers/user-loaded';

describe('loadAllUsers reducer', ()=> {
  it('should return users array', ()=> {
    expect(loadAllUsers([], {
          type: 'USER_LOADED', data: [{
            id: 1,
            username: 'zhangsan',
            name: 'zhang',
            sex: '男',
            age: 20,
            phone: '18902354526',
            email: 'said@163.com',
            note: 'happy'
          }]
        }
    )).to.be.deep.equal(
        [
          {
            id: 1,
            username: 'zhangsan',
            name: 'zhang',
            sex: '男',
            age: 20,
            phone: '18902354526',
            email: 'said@163.com',
            note: 'happy'
          }
        ]
    )
  })
});