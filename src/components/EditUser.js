import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class EditUser extends Component {
  state = {
    id: this.props.user.id,
    name: this.props.user.name,
    job: this.props.user.job,
    info: this.props.user.info
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/');
    this.props.editUser(this.state);
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="container my-3">
          <div className="row">
            <div className="col-sm-12 col-md-6 offset-md-3">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input id="name" onChange={this.handleChange} className="form-control" type="text" defaultValue={user.name} required />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Job:</label>
                  <input id="job" onChange={this.handleChange} className="form-control" type="text" defaultValue={user.job}  required />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Info:</label>
                  <textarea id="info" onChange={this.handleChange} className="form-control" type="text" defaultValue={user.info} required />
                </div>
                <div className="text-center">
                  <button onClick={this.props.history.goBack} className="btn btn-danger mr-1">Cancel</button>
                  <button className="btn btn-success ml-1">Edit user</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.user_id;
  return {
    user: state.users.find(user => user.id == id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (state) => {dispatch({ type: 'EDIT_USER', state: state })}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);