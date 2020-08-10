import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import AddProduct from "./components/AddProduct/AddProduct";
import MyOrders from "./components/MyOrders/MyOrders";
import 'reset-css'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Route exact path="/" component={Products} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/orders" component={MyOrders} />
        </main>
      </div>
    );
  }
}


export default App;
