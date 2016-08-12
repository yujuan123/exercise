import React, { Component } from 'react';

class ResultList extends Component {
  render() {
    let result = [{
      name: 'aaa',
      price: 100
    }, {
      name: 'abc',
      price: 99
    }];
    return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
          {
            result.map((v, k)=> {
              return (
                  <tr key={k}>
                    <td>{k+1}</td>
                    <td>{v.name}</td>
                    <td>{v.price}</td>
                  </tr>
              )
            })
          }
          </tbody>
        </table>
    )
  }
}

export default ResultList