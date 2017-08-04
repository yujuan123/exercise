/**
 * Created by yujuan on 17-8-2.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteUser,updateUser} from '../actions/index';

class UserItem extends Component {

  
  deleteUser(userId) {
    if(confirm("你确定要删除吗")){
      this.props.deleteUser(userId);
    }
  }

  updateUser(userInfo) {
    let username = document.getElementById("username");
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let sex = document.getElementById("sex");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let note = document.getElementById("note");
    username.value = userInfo.username;
    name.value = userInfo.name;
    age.value = userInfo.age;
    sex.value = userInfo.sex;
    phone.value = userInfo.phone;
    email.value = userInfo.email;
    note.value = userInfo.note;
    const div = document.getElementById("updatePopup");
    div.style.display = "block";
  }

  confirmUpdate(userId) {

    let username = document.getElementById("username").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let sex = document.getElementById("sex").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let note = document.getElementById("note").value;
    this.props.updateUser({
      userId: userId,
      userMess: {
       username,
        name,
        age,
        sex,
        phone,
        email,
        note
      }
    });
    const div = document.getElementById("updatePopup");
    div.style.display = "none";
  }
  cancelUpdate(){
    const div = document.getElementById("updatePopup");
    div.style.display = "none";
  }
  render() {
    
    let {id, username, name, age, sex, phone, email, note} = this.props;
    return (
        <tr>
          <td>{id}</td>
          <td>{username}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{sex}</td>
          <td>{phone}</td>
          <td>{email}</td>
          <td>{note}</td>
          <td>
            <button className="btn-danger" onClick={this.deleteUser.bind(this,id)}>删除</button>
            <button className="btn-info" onClick={this.updateUser.bind(this,this.props)}>修改</button>
          </td>
          <div className="popup" id="updatePopup">
            <div className="window">
              <table>
                <caption>修改用户</caption>
                <tbody>
                <tr>
                  <th>用户名：</th>
                  <td><input  id="username" type="text" /></td>
                </tr>
                <tr>
                  <th>姓名：</th>
                  <td><input id="name" type="text" /></td>
                </tr>
                <tr>
                  <th>年龄：</th>
                  <td><input id="age" type="text" /></td>
                </tr>
                <tr>
                  <th>性别：</th>
                  <td><input id="sex" type="text" /></td>
                </tr>
                <tr>
                  <th>移动电话：</th>
                  <td><input id="phone" type="text" /></td>
                </tr>
                <tr>
                  <th>电子邮件：</th>
                  <td><input id="email" type="text" /></td>
                </tr>
                <tr>
                  <th>备注：</th>
                  <td><input id="note" type="text" /></td>
                </tr>
                </tbody>
              </table>
              <button className="btn-info" onClick={this.confirmUpdate.bind(this,id)}>确定</button>
              <button className="btn-danger" onClick={this.cancelUpdate.bind(this)}>取消</button>
            </div>
          </div>
        </tr>
    )
  }
}
const mapStateToProps = (state)=> {
  return {userDelete: state.userDelete};
};
const mapDispatchToProps = (dispatch)=>({
 
  deleteUser: (id)=> {
    dispatch(deleteUser(id));
  },
  updateUser: (userInfo)=>{
    dispatch(updateUser(userInfo));
  }
});
const UserItemPackage = connect(mapStateToProps, mapDispatchToProps)(UserItem);

export default UserItemPackage;