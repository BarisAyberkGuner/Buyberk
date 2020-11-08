import React, { Component } from 'react';
import OrderService from '../services/OrderService'
import { Route } from 'react-router-dom'
import ProductService from '../services/ProductService';
import ListProductComponent from './ListProductComponent';

class OrderProductComponent extends Component {

    constructor(props){
        super(props)
        this.state= {
            products: [],
            id: this.props.match.params.id,
            productCategory: '',
            productName: '',
            productPrice: 0,
            productDiscription: '',
            productImage: '',
            orderAdress:'',
            orderTime:'',
            
            
        }
        this.changeOrderAdressHandler= this.changeOrderAdressHandler.bind(this);
        this.addOrder = this.addOrder.bind(this);
        this.deleteProduct= this.deleteProduct.bind(this);
        
    }
    addOrder =(e)=>{
        e.preventDefault();
            let order = {productID:this.state.id,
            productName:this.state.productName,
            productPrice:this.state.productPrice,
            productCategory:this.state.productCategory,
            orderAdress:this.state.orderAdress}
        console.log('order=>'+JSON.stringify(order))
        OrderService.addOrder(order).then(res=>{
            this.props.history.push('/')
        });
    }

    deleteProduct(id){
        ProductService.deleteProduct(id).then(res =>{
         this.setState({products: this.state.products.filter(product => product.id!==id)})
 
        });
 
     }
    changeOrderAdressHandler=(event)=>{
        this.setState({orderAdress: event.target.value})
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
        ProductService.GetProducts().then((res) => {
            this.setState({ products: res.data })
        });
      
    }
    render() {
        return (
            <div>
              
            <br/>
            

            <div className="row">
                
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Sipariş Ekranı</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                <label >Ürün Adı: {this.state.productName}</label>
                                </div>
                                <div className="form-group">
                                    <label >Ürün Fiyatı: {this.state.productPrice}</label>
                                </div>
                                <div className="form-group">
                                    <label >Ürün Kategorisi: {this.state.productCategory}</label>
                                </div>
                                <div className="form-group">
                                    <label >Gönderim Adresi Giriniz:</label>
                                    <input placeholder="Adresinizi Giriniz" name="orderAdress" className="form-control"
                                    value={this.state.orderAdress} onChange={this.changeOrderAdressHandler}/>
                                </div>
                                <button className="btn btn-dark" onClick={this.addOrder}>Sipariş Ver</button>
                            </form>
                            
                        </div>
                        
                    </div>
                </div>
                </div>
        );
    }
}

export default OrderProductComponent;