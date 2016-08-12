import React, { Component } from 'react';

class ResultList extends Component {
  render() {
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
            <tr>
              <td>1</td>
              <td>aaa</td>
              <td>100.00</td>
            </tr>
            <tr>
              <td>2</td>
              <td>abc</td>
              <td>104.00</td>
            </tr>
          </tbody>
        </table>
    )
  }
}

export default ResultList