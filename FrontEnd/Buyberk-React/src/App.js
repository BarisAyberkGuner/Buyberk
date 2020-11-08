import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import SignINComponent from './components/RegisterComponent';
import HomeComponent from './components/HomeComponent';
import AddProductComponent from './components/AddProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import ListProductComponent from './components/ListProductComponent';
import RegisterComponent from './components/RegisterComponent';
import ShowProductDetailsComponent from './components/ShowProductDetailsComponent';
import OrderProductComponent from './components/OrderProductComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path ="/" exact component = {HomeComponent,ListProductComponent}></Route>
              <Route path ="/users" component = {ListUserComponent}></Route>
              <Route path ="/register" component = {RegisterComponent}></Route>
              <Route path ="/add-product" component = {AddProductComponent}></Route>
              <Route path ="/show-product/:id" component = {ShowProductDetailsComponent}></Route>
              <Route path ="/order-product/:id" component = {OrderProductComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
       
      </Router>
    </div>
  );
}

export default App;
