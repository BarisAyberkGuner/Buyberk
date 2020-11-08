import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    logon = true
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="/" className="navbar-brand">Buyberk</a></div>
                        <nav className="ml-auto nav-item" >
                            <a href="/add-product" className="btn-dark">Ürün Sat </a>
                            <a href="/register" className="btn-dark">Kayıt Ol </a>
                        </nav>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;