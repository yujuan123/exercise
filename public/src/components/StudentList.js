import React, {Component} from 'react';
import { connect } from 'react-redux';

class StudentList extends Component {

  handleClick(item) {
      console.log(item);
  }

  render() {
    let {result, selectLine} = this.props;
    return (
        <div>
          {
            result.map((v, k)=> {
              return (
                  <button
                      key={k}
                      type="button"
                      className="btn btn-primary"
                      onClick={selectLine.bind(this, v.id)}>
                    {v.name}
                  </button>
              )
            })
          }
        </div>
    )
  }
}

const mapStateToProps = (state)=> (state);

const mapDispatchToProps = (dispatch)=> ({
  selectLine: (id)=> {
    dispatch({
      type: "SELECT_LINE",
      id
    })
  }
});

StudentList = connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentList);

export default StudentList;