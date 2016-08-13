import React, {Component} from 'react';
import PersonItem from './PersonItem';

class People extends Component {
  render() {
    let people = this.props.people;
    people = [];
    return (
        <div className="row">
          {
            people.map((v)=> (
                <PersonItem key={v._id}  name={v.name} image={v.image} />
            ))
          }
        </div>

    );
  }
}

export default People;