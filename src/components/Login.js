import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import "./Login.css";

import { authorize } from '../reducers/reducers';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
            // loggedIn: false
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }
      

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.dispatch(authorize(this.state.username, this.state.password));
 
    }

    render() {

        const {error, token} = this.props;
        if (error){
            console.log(error);
        }
            
        if (token) {
            return <Redirect to="/" />;
        }

        return (
          <div className="Login">
            <form onSubmit={this.handleSubmit}>
                {error && <div style={{ color: 'red'}}>Error: {error}</div>}
                <FormGroup controlId="username" bsSize="large">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
                <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                >
                Login
                </Button>
            </form>
        </div>
      );
    }
  }

  const mapStateToProps=(state) => {
    return {
        token: state.token,
        error: state.error
    }
  }

//   const mapDispatchToProps = (dispatch) => {
//     console.log(dispatch);
//     return {
//         authorize: (username, password) => {
//         dispatch({ type: 'USER_LOGIN', username: username, password: password })
//       }
//     }
//   }
  
  export default connect(mapStateToProps)(Login);
  

