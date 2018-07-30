import { Component } from 'react';
import { connect } from 'react-redux'


class Logout extends Component {

    componentDidMount() {
        this.props.logout();
    }

    render() {
        return null;
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
        dispatch({ type: 'SIGNOUT' })
      }
    }
  }

export default connect(null, mapDispatchToProps)(Logout);