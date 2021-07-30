import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

const PublicRoute = ({
    isAuthenticated,
    component : Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={( props) => ( //estas props son : history , location , match
                !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
             )   
            }
        />
        
    )
}

PublicRoute.propTypes={
    isAuthenticated : PropTypes.bool.isRequired,
    component  : PropTypes.func.isRequired,
}

export default PublicRoute
