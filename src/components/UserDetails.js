import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const UserDetails = ({ user, deleteUser, history }) => {
  const handleClick = () => {
    deleteUser(user.id)
    history.push('/')
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 offset-md-3 mt-3">
            <div className="card">
              <div className="card-header">
                <h4>{user.name}</h4>
              </div>
              <div className="card-body">
                <h4 className="text-center">{user.job}</h4>
                <p>{user.info}</p>
                <button onClick={history.goBack} className="btn btn-primary">User list</button>
              </div>
              <div className="card-footer text-center">
                <Link to={'/edit_user/' + user.id} className="btn btn-warning mr-1">Edit user</Link>
                <button onClick={handleClick} className="btn btn-danger ml-1">Delete user</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.user_id;
  return {
    user: state.users.find(user => user.id == id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id) => { dispatch({ type: 'DELETE_USER', id: id }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);