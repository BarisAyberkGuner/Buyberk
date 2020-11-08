import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class ListProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
        this.showProduct = this.showProduct.bind(this);
        this.deleteProduct= this.deleteProduct.bind(this);
    }
    deleteProduct(id){
        ProductService.deleteProduct(id).then(res =>{
         this.setState({products: this.state.products.filter(product => product.id!==id)})
 
        });
 
     }
    
    showProduct(id){
        this.props.history.push(`/show-product/${id}`);
    }
    componentDidMount() {
        ProductService.GetProducts().then((res) => {
            this.setState({ products: res.data })
        });
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Product List </h2>
                <br />
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Product Category</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(
                                    product =>
                                        <tr key={product.id}>
                                            <td>{product.productCategory}</td>
                                            <td>{product.productName}</td>
                                            <td>{product.productPrice}</td>
                                            <td><button onClick= {()=> this.showProduct(product.id)} className="btn btn-dark">Ürünü İncele </button>
                                            <button style={{marginLeft:"10px"}} onClick={()=> this.deleteProduct(product.id)} className="btn btn-dark">Sil</button>
                                            </td>
                                        </tr>

                                )
                            }
                        </tbody>

                    </table>
                </div>

            </div>
        );
    }
}

export default ListProductComponent;