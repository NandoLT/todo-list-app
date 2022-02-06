import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {Button} from '../commons/Button';

import '../../../assets/css/header.css';
import AuthButton from '../auth/AuthButton/AuthButton';

const Header = ({ className, isLogged, onLogout, ...props }) => {

    return (
        <header className={classNames('header', className)} {...props}>
        <Link to="/">
            <div className="header-logo">
                NODEPOP
            </div>
        </Link>
            <nav className="header-nav">
            <Button
                as={Link}
                to="/adverts"
                variant="primary"
                className="header-button"
            >
                Home
            </Button>
            <Button
                as={Link}
                to="/new-advert"
                variant="primary"
                className="header-button"
            >
                New Advert
            </Button>
            <AuthButton
                className="header-button"
                isLogged={isLogged}
                onLogout={onLogout}
            />
            </nav>
        </header>
    );
};

export default Header;