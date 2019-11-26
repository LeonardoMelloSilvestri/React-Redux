import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../actions/userActions';

class User extends Component {
  handleClick = () => {
    this.props.deleteUser(this.props.user.id);
    this.props.history.push('/');
  }

  render() {
    const user = this.props.user;
    return (
      <div className="mt-3">
        <ul className="nav nav-pills" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Work Experience</a>
          </li>          
          <li className="nav-item ml-2">
            <button onClick={this.handleClick} className="btn btn-danger nav-link">Delete user</button>
          </li>          
        </ul>
        <div className="tab-content mt-3" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h3>Name: {user.name}</h3>
            <h4>Age: {user.age}</h4>
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <h4>{user.info}</h4>
          </div>
          <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <h4>{user.info}</h4>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToStore = (state, ownProps) => {
  const id = ownProps.match.params.user_id;
  return {
    user: state.users.find(user => user.id == id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id) => { dispatch(deleteUser(id)) }
  }
}

export default connect(mapStateToStore, mapDispatchToProps)(User);