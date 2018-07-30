import React, { Component } from "react";
import { connect } from 'react-redux';
import LeftNavbar from '../components/LeftNavbar';
import Header from '../components/Header'
import ContentLayout from './ContentLayout'
import './MainLayout.css';
import { Redirect } from "react-router-dom";


class MainLayout extends Component {
    render() {
        if (!this.props.token) {
            return <Redirect to="/login" />;
        }
        
        return (
            
            <div className="app">
                <aside className="primary-aside">
                    <LeftNavbar />
                </aside>
                <main>
                    <Header />
                    <ContentLayout />
                </main>
            </div>
        );
    }
}


const mapStateToProps=(state) => {
    return {
        token: state.token
        // user: state.user,
        // isLogin: state.isLogin
    }
}
  
  
export default connect(mapStateToProps)(MainLayout);
  