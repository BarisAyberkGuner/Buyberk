import React, { Component } from 'react';
import ProductService from '../services/ProductService';
import { Route } from 'react-router-dom'

class ShowProductDetailsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            id: this.props.match.params.id,
            productCategory: '',
            productName: '',
            productPrice: 0,
            productDiscription: '',
            productImage: '',
        }
        this.orderProduct = this.orderProduct.bind(this);
    }
    orderProduct(id){
        this.props.history.push(`/order-product/${id}`);
    }
    componentDidMount() {
        ProductService.getProductByID(this.state.id).then((res) => {
            let product = res.data;
            this.setState({
                productName: product.productName,
                productCategory: product.productCategory,
                productPrice: product.productPrice,
                productDiscription: product.productDiscription,
                productImage: product.productImage
            });
        });
    }
    render() {
        return (
            <div className="details mt-5">
                <div className="container">
                    <a href="/" className="btn btn-dark">Ürünlere Geri Dön</a>
                    <br/>
                    <hr/>
                    <h1 className="ml-3">{this.state.productName}</h1>
                    <hr/>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <img src={this.state.productImage} alt={this.state.productImage} className="mb-3" />
                            
                            <h5>Ürün Açıklaması</h5>
                            <hr/>
                            {this.state.productDiscription}
                            <hr />
                            {this.state.productPrice} TL <br/>
                            <button onClick={()=> this.orderProduct(this.state.id)} className="btn btn-dark">Satın Al</button>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowProductDetailsComponent;