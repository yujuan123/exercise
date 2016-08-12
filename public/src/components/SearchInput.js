import React, { Component } from 'react';

class SearchInput extends Component {
  handleClick() {

  }

  render() {
    return (
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email"
                     ref="_email" />
            </div>
          </div>
          
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-default">Sign inn</button>
            </div>
          </div>
        </form>
    )

  }
}

export default SearchInput;