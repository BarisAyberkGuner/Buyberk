import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class AddProductComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            productName: '',
            productPrice:0,
            productCategory: '',
            productDiscription: '',
            productImage: '',
        }
        this.changeProductNameHandler=this.changeProductNameHandler.bind(this);
        this.changeProductPriceHandler=this.changeProductPriceHandler.bind(this);
        this.changeProductCategoryHandler=this.changeProductCategoryHandler.bind(this);
        this.changeProductDiscriptionHandler=this.changeProductDiscriptionHandler.bind(this);
        this.changeProductImageHandler=this.changeProductImageHandler.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }
    addProduct =(e)=>{
        e.preventDefault();
        let product = {productName:this.state.productName,productPrice:this.state.productPrice,productCategory:this.state.productCategory,productDiscription:this.state.productDiscription,productImage:this.state.productImage}
        console.log('product=>'+JSON.stringify(product))
        ProductService.addProduct(product).then(res=>{
            this.props.history.push('/')
        });
    }
    changeProductNameHandler=(event)=>{
        this.setState({productName: event.target.value})
    }
    changeProductPriceHandler=(event)=>{
        this.setState({productPrice: event.target.value})
    }
    changeProductCategoryHandler=(event)=>{
        this.setState({productCategory: event.target.value})
    }
    changeProductDiscriptionHandler=(event)=>{
        this.setState({productDiscription: event.target.value})
    }
    changeProductImageHandler=(event)=>{
        this.setState({productImage: event.target.value})
    }
    render() {
        return (
            <div>
                <br/>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Ürün Ekle</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label >Ürün Adı</label>
                                    <input placeholder="Ürün Adı" name="productName" className="form-control"
                                    value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label >Ürün Fiyatı</label>
                                    <input placeholder="ÜrünFiyati" name="productPrice" className="form-control"
                                    value={this.state.productPrice} onChange={this.changeProductPriceHandler}/>
                                </div>
                                <div className="form-group">
                                    <label >Ürün Kategorisi</label>
                                    <input placeholder="Category" name="productCategory" className="form-control"
                                    value={this.state.productCategory} onChange={this.changeProductCategoryHandler}/>
                                </div>
                                <div className="form-group">
                                    <label >Ürün Açıklaması</label>
                                    <input placeholder="Ürün Açıklaması" name="productDiscription" className="form-control"
                                    value={this.state.productDiscription} onChange={this.changeProductDiscriptionHandler}/>
                                </div>
                                <div className="form-group">
                                    <label >Ürün Resmi</label>
                                    <input placeholder="Ürün Resmi" name="productImage" className="form-control"
                                    value={this.state.productImage} onChange={this.changeProductImageHandler}/>
                                </div>
                                <button className="btn btn-success "onClick={this.addProduct}>Ürün Ekle</button>
                            </form>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProductComponent;