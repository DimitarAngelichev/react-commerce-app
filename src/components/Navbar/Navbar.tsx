import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './Navbar.css';

class Navbar extends React.Component<any, any> {
    render() {
        return (
            <header className="navbar">
                <div className="navbar-navigation">
                    <div className="logos-container">
                        <div className="navbar-logo-img">
                            <img src="/shoppingLogo.png" alt="cart-img" />
                        </div>
                        <div className="navbar-logo"><a href="/">eSHOP.com</a></div>
                    </div>

                    <div className="navbar-products-and-cart">
                        <div className="navbar-items">
                            <ul>
                                <NavLink exact to="/">
                                    <li className="products-button tabs">Products</li>
                                </NavLink>
                                <NavLink to="/orders">
                                    <li className="orders-button tabs">My Orders</li>
                                </NavLink>
                                <NavLink to="/add-product">
                                    <li className="add-button tabs">Add Product</li>
                                </NavLink>
                            </ul>
                        </div>
                        <div className="navbar-bubble-cart">
                            <div className="navbar-bubble-cart-image"
                                style={{ backgroundImage: `url(/shoppingCart.png)` }}>
                                <span className="cart-bubble-counter">
                                    {this.props.currentCartCount}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state: any) => ({    
    currentCartCount: state.product.currentCartCount
})
export default connect(mapStateToProps)(Navbar);
