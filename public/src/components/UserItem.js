/**
 * Created by yujuan on 17-8-2.
 */
import React, {Component} from 'react';

class UserItem extends Component{
  render(){
    let {id,username, name, age, sex, phone, email, note} = this.props;
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
        </tr>
    )
  }
}
export default UserItem;