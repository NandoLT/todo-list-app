import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '../commons/Button';
import FormField from '../commons/FormField';
import storage from '../../utils/storage';


import '../../assets/css/loginForm.css';

const userName = storage.get('username');
const userPassword = storage.get('password');

function LoginForm({ onSubmit, isLoading }) {
    const [credentials, setCredentials] = React.useState({
        username:'',
        password:''
    });
    const [remember, setRemember] = React.useState(false)

    React.useEffect(() => {     
        if(userName && userPassword) {
            const savedCredentials = {username:userName, password:userPassword};
            setCredentials(savedCredentials);
        } else {
            setCredentials({username:'', password:''});
        }
    }, [])

    const handleChangeCredentials = event => {
        setCredentials(oldCredentials => ({
            ...oldCredentials,
            [event.target.name]: event.target.value,
        }));
    };

    const handleRemember = () => {
        setRemember(!remember);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(credentials, remember);
    }

    const {username, password} = credentials
    return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <FormField
                type="text"
                name="username"
                label="Username"
                className="loginForm-field"
                value={username}
                onChange={handleChangeCredentials}
            />
            <FormField
                type="password"
                name="password"
                label="password"
                className="loginForm-field"
                value={password}
                onChange={handleChangeCredentials}
            />
            <Button 
                type="submit"
                className="loginForm-submit"
                variant="primary"
                disabled={isLoading || !username || !password}
            >
            Log in
            </Button>
            <FormField
                type="checkbox"
                name="remember"
                label="Remember Me"
                className="loginForm-remember"
                onChange={handleRemember}
            />
        </form>
    );
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default LoginForm;