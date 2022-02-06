import React from 'react';

import Header from './Header';
import Footer from './Footer'
import '../../../assets/css/layout.css';

function Layout({ children, title, ...props}) {
    return(
    <div className="layout">
        <Header className="layout-header bordered" {...props} />
        <main className="layout-main bordered">
            <h2 className="layout-title bordered title is-4">{title}</h2>
            <section className="layout-content">{children}</section>
        </main>
        <Footer />
    </div>
    );
}

export default Layout;