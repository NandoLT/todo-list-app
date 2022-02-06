import T from 'prop-types';
import {Link} from 'react-router-dom';
import {Button} from '../../commons/Button';
import {logout} from '../../../dataService/auth';

const AuthButton = ({ className, isLogged, onLogout}) => {
    const handleLogout = () => {
        logout().then(onLogout);
        
    };

    const props = isLogged ?
        {onClick: handleLogout, children:'Log out'} :
        {
            as: Link,
            to: '/login',
            children: 'Log in',
        };

    return <Button className={className} {...props} />;
};

AuthButton.propTypes = {
    className: T.string,
    isLogged: T.bool,
    onLogout: T.func.isRequired,
};

AuthButton.defaultProps = {
    isLogged: false,
};

export default AuthButton;