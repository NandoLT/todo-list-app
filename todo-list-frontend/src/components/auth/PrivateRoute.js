import {Navigate, Route} from 'react-router-dom';

const PrivateRoute = ({ children, isLogged }) => {
    return isLogged ? children  : <Navigate to="/login" />;
}

export default PrivateRoute