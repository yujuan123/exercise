import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import {connect} from 'react-redux';
import {addUserInfo, search} from '../actions/index';
import UserItem from './UserItem';
class App extends Component {
  addClick() {
    this.refs.username.value = "";
    this.refs.name.value = "";
    this.refs.age.value = "";
    this.refs.sex.value = "";
    this.refs.phone.value = "";
    this.refs.email.value = "";
    this.refs.note.value = "";
    const div = document.getElementById("addPopup");
    div.style.display = "block";
  }

  confirm() {
    let username = this.refs.username.value.trim();
    let name = this.refs.name.value.trim();
    let age = this.refs.age.value.trim();
    let sex = this.refs.sex.value.trim();
    let phone = this.refs.phone.value.trim();
    let email = this.refs.email.value.trim();
    let note = this.refs.note.value.trim();
    this.props.addUserInfo({
      username,
      name,
      age,
      sex,
      phone,
      email,
      note
    });
    const div = document.getElementById("addPopup");
    div.style.display = "none";
  }

  cancel() {
    const div = document.getElementById("addPopup");
    div.style.display = "none";
  }

  search() {
    //获取搜索内容
    let username = this.refs.search.value.trim();
    this.props.search({username});
  }


  render() {
    let users = this.props.userLoaded;
    return (
        <div className="main">

          <div className="search">
            <input id="add" className="btn-info" type="button" value="添加" onClick={this.addClick.bind(this)}/>
            <input id="searchText" ref="search" type="text"/>
            <input id="search" className="btn-info" type="button" value="搜索" onClick={this.search.bind(this)}/>
          </div>

          <table className="table table-hover">
            <thead>
            <tr>
              <th>编号</th>
              <th>用户名</th>
              <th>姓名</th>
              <th>年龄</th>
              <th>性别</th>
              <th>移动电话</th>
              <th>电子邮件</th>
              <th>备注</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            {
              users.map((v, k)=> {
                return <UserItem key={k} id={v.id} username={v.username}
                                 name={v.name} age={v.age} sex={v.sex} phone={v.phone} email={v.email} note={v.note}/>
              })
            }
            </tbody>
          </table>

          <div className="popup" id="addPopup">
            <div className="window">
              <table>
                <caption>添加用户</caption>
                <tbody>
                <tr>
                  <th>用户名：</th>
                  <td><input ref="username" type="text"/></td>
                </tr>
                <tr>
                  <th>姓名：</th>
                  <td><input ref="name" type="text"/></td>
                </tr>
                <tr>
                  <th>年龄：</th>
                  <td><input ref="age" type="text" placeholder="18～100之间"/></td>
                </tr>
                <tr>
                  <th>性别：</th>
                  <td>
                    <select ref="sex">
                      <option value="">--请选择性别--</option>
                      <option value="男">男</option>
                      <option value="女">女</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>移动电话：</th>
                  <td><input ref="phone" type="text"/></td>
                </tr>
                <tr>
                  <th>电子邮件：</th>
                  <td><input ref="email" type="text"/></td>
                </tr>
                <tr>
                  <th>备注：</th>
                  <td><input ref="note" type="text"/></td>
                </tr>
                </tbody>
              </table>
              <button className="btn-info" onClick={this.confirm.bind(this)}>确定</button>
              <button className="btn-danger" onClick={this.cancel.bind(this)}>取消</button>
            </div>
          </div>

        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {userLoaded: state.userLoaded}
};
const mapDispatchToProps = (dispatch)=>({
  addUserInfo: (data)=> {
    dispatch(addUserInfo(data));
  },
  search: (username)=> {
    dispatch(search(username));
  }

});
const AppPackage = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppPackage;
