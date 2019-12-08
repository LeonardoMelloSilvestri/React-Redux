import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Users = ({ users }) => {
  const userList = users.map(user => {
    return (
      <div className="col-sm-12 col-md-6 my-2" key={user.id}>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title text-center">{user.name}</h3>
          </div>
          <div className="card-body">
            <h4>{user.job}</h4>
            <p>{user.info}</p>
          </div>
          <div className="card-footer text-center">
            <Link to={'user/' + user.id} className="btn btn-primary">More ...</Link>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="container mt-1">
        <div className="row">
          {userList}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users);