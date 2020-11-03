import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'


const PrivateRoute = ({component: Component, user ,   ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            user.isLogged !== null || user.isLogged !== 'undefined' ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};


const mapStateToProps = state => ({
    user : state.user
})


export default connect(mapStateToProps , null)(PrivateRoute)