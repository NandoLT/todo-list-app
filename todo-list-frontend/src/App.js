import React from 'react';
import LoginPage from  './components/auth/Login';
import NotFound from './components/commons/NotFound';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import UserPrivate from './components/users/UserPrivate';

import './assets/css/app.css';

function App({ isInitiallyLogged }) {

    const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

    const handleLogin = () => {
        setIsLogged(true)
    }

    const handleLogout = () => {
        setIsLogged(false)
    }

    return (
        <div className="App">
            <Routes>

                <PrivateRoute 
                    exact path="/dashboard"
                    isLogged={isLogged}
                    onLogout={handleLogout}  
                >
                    {/* <Redirect to="/adverts"/> */}
                    <UserPrivate />
                </PrivateRoute>

                <Route path="/login">
                    {({history, location}) => (
                    <LoginPage 
                        onLogin={ handleLogin } 
                        history={ history }/>
                    )}
                </Route>

                <Route path="/404" component={ NotFound }/>

                <Route path="*" element={ <Navigate to="/404" /> }></Route>

            </Routes>
        </div>
    )
}

export default App;