import {Navigate, Route} from 'react-router-dom';

const PrivateRoute = ({isLogged, ...props}) => {
    return isLogged ? <Route  {...props} /> : <Route path="*" element={ <Navigate to="/login" /> } /> ;
    
    // <Redirect to="/login" />
}

export default PrivateRoute