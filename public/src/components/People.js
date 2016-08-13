import React, {Component} from 'react';
import PersonItem from './PersonItem';

class People extends Component {
  render() {
    let list = [{
      name: '韩亦乐',
      image: 'images/01.jpg'
    }, {
      name: '鱼娟',
      image: 'images/02.jpg'
    }, {
      name: '段雪',
      image: 'images/03.jpg'
    }];

    return (
        <div className="row">
          {
            list.map((v, k)=> (
                <PersonItem key={k}  name={v.name} image={v.image} />
            ))
          }
        </div>

    );
  }
}

export default People;