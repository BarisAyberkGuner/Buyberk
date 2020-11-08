import React, { Component } from 'react';

class HomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.addUser= this.addUser.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }
    addUser(){
        this.props.history.push('/sign-in');
    }
    addProduct(){
        this.props.history.push('/add-product');
    }
    render() {
        return (
            <div>
                <br/><br/><br/>
                <h2 className="text-center">Buyberk'e hoşgeldiniz </h2>
                <div className="row">
                    <button className="btn btn-primary "on onClick={this.addUser}>Kayıt Ol</button>
                </div>
                <br/>
                <div className="row">
                    <button className="btn btn-primary "on onClick={this.addProduct}>Ürün Ekle</button>
                </div>
            </div>
        );
    }
}

export default HomeComponent;