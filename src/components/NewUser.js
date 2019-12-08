import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NewUser extends Component {
  state = {
    id: '',
    name: '',
    job: '',
    info: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <div className="row">
            <div className="col-sm-12 col-md-6 offset-md-3">
              <form onSubmit={this.handleSubmit} action="">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input onChange={this.handleChange} id="name" className="form-control" type="text" required />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Job:</label>
                  <input onChange={this.handleChange} id="job" className="form-control" type="text" required />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Info:</label>
                  <textarea onChange={this.handleChange} id="info" className="form-control" type="text" required />
                </div>
                <div className="text-center">
                  <Link to="/" className="btn btn-danger mr-1">Cancel</Link>
                  <button className="btn btn-primary ml-1">Add user</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (state) => { dispatch({ type: 'ADD_USER', state: state }) }
  }
}

export default connect(null, mapDispatchToProps)(NewUser);