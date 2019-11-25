import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
    const user = this.props.user;
    return (
      <div className="mt-3">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Work Experience</a>
          </li>
        </ul>
        <div class="tab-content mt-3" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h3>Name: {user.name}</h3>
            <h4>Age: {user.age}</h4>
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <h4>{user.info}</h4>
          </div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
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

export default connect(mapStateToStore)(User);