import React, { Component } from "react";
import PropTypes from 'prop-types'
import "./UserListPage.css";

const User = (user) => (
  <li>{'User Name: '+user.name}</li>
)

const UserList = (users) => (
  <ul>
      {users.map(user => 
        <User key={user.id} {...user} />
          )}
  </ul>
)

class UserListPage extends Component {
  componentWillMount(){

  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
            <h1>User Profile</h1>
            <p>Name: Irene</p>
        </div>
      </div>
    );
  }
}

export default UserListPage;