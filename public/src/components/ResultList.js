import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

class ResultList extends Component {
  render() {
    let {result} = this.props;
    
    return (
        <div className="col-sm-8 col-sm-offset-2">
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
                );
              })
            }
            </tbody>
          </table>
        </div>

    );
  }
}

const mapStateToProps = (state)=> ({
  result: state.result
});

const mapDispatchToProps = (dispatch)=> ({
  selectLine: (id)=> {
    dispatch({
      type: 'SELECT_LINE',
      id
    });
  }
});

const ResultListClz = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultList);

export default ResultListClz;