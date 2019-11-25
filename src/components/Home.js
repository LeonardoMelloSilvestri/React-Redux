import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = ({ users }) => {
  const userList = users.map(user => {
    return (
      <div className="col-sm-6 mt-3" key={user.id}>
        <div className="card">
          <h5 className="card-header">{user.name}</h5>
          <div className="card-body">
            <h5 className="card-title">{user.job}</h5>
            <p className="card-text">{user.info}</p>
            <Link to={'user/' + user.id} className="btn btn-primary">More...</Link>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div id='home'>
      <div className="row">
        {userList}
      </div>
    </div>
  )
}

const mapStateToStore = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToStore)(Home);