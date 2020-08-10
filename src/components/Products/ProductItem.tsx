import React from 'react';
import './ProductItem.css';
import ProductItemInterface from "../../interfaces/ProductItemInterface";
import { connect } from 'react-redux';
import { addCartCount } from '../../redux/Product/product.actions'
import store from '../../redux/createStore';
import productTypes from '../../redux/Product/product.types';

export class ProductItem extends React.Component<ProductItemInterface>{
    increment() {
        store.dispatch({ type: productTypes.SET_CURRENT_CART_COUNT });
    }

    render() {
        const { name, price, image } = this.props;
        return (
            <div className="product-container">
                <div className="product-image-container">
                    <div className="image-holder"
                        style={{
                            backgroundImage: `url(${image}), 
                    url(https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg)`}}>
                    </div>
                </div>

                <div className="image-controls">
                    <div className="title-container">
                        <p className="title">{name}</p>
                    </div>
                    <div className="image-container" onClick={this.increment}>
                        <img src="/shoppingCart.png" alt="cart-icon" />
                    </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state: any) {
    return {
        currentCartCount: state.currentCartCount
    };
}

const mapDispatchToProps = (dispatch: any) => ({
    currentCartCount: (count: any) => dispatch(addCartCount)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);