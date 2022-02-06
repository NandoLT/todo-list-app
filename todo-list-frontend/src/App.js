import React from 'react';
import LoginPage from  './components/auth/Login';
import NotFound from './components/commons/NotFound';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import Tasks from './components/tasks/Tasks';

import './assets/css/app.css';

function App({ isInitiallyLogged }) {

    const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

    const handleLogin = () => {
        setIsLogged(true);
    }

    const handleLogout = () => {
        setIsLogged(false);
    }

    return (
        <div className="App">
            <Routes>

                <Route path="/" 
                    element={
                        <PrivateRoute isLogged={ isLogged }>
                            <Tasks />
                        </PrivateRoute>
                    } 
                />

                <Route path="/login" element={ 
                    <LoginPage 
                        onLogin={ handleLogin } 
                    />} 
                />

                <Route path="/404" element={ <NotFound /> } />

                <Route path="*" element={ <Navigate to="/404" /> } />

            </Routes>
        </div>
    )
}

export default App;