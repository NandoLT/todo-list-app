import React from 'react';
import LoginForm from './LoginForm';
import {login} from '../../dataServices/dataUsers/auth';
import Loader from '../commons/Loader';

import '../../assets/css/login.css';

function LoginPage({onLogin, history, location}) {

    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const isLogged = React.useRef(false);

    React.useEffect(() => {
        if(isLogged.current) {
            onLogin();
            history.push('/');
        }
    }, [isLogged.current, onLogin])

    const handleSubmit = async (credentials, remember) => {
        setError(null);
        setIsLoading(true);
        try {
            await login(credentials, remember);
            isLogged.current = true;
        } catch (error) {
            setError(error);
        }finally{
            setIsLoading(false);
        }
    }
    return (
        <>
            { isLoading && <Loader />}
            <div className="loginPage">
                <h1 className="loginPage-title">Nodepop Login</h1>
                <LoginForm onSubmit={handleSubmit} isLoading={isLoading}/>
                { error && <div className="loginPage-error">{error.message}</div>}
            </div>
        </>
    )
}

export default LoginPage;