import React from 'react';
import { connect } from 'react-redux';
import './AddProduct.css';
import { addProduct as dispatchProduct } from "../../redux/Product/product.actions";
import ProductItemInterface from '../../interfaces/ProductItemInterface';

class AddProduct extends React.Component<any, any> {
    state: ProductItemInterface = {
        name: '',
        price: 0,
        image: ''
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        let priceToNum = Number(this.state.price);
        if (!priceToNum) {
            this.setState({
                price: 0
            })
        } else {
            this.setState({
                price: priceToNum
            })
        }

        this.props.dispatch(dispatchProduct(this.state))

        this.props.history.push("/")

    }
    render() {
        return (
            <div className="product-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="headline">
                        <h1>New Product</h1>
                    </div>

                    <div className="product-name-and-price">
                        <div className="product-name">
                            <input type="text" id="name" placeholder="Product Name"
                                onChange={this.handleChange} />
                        </div>
                        <div className="product-price">
                            <input type="text" id="price" placeholder="Price"
                                onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="image-url">
                        <input type="text" id="image" placeholder="Image Url"
                            onChange={this.handleChange} />
                    </div>
                    <div className="button">
                        <button className="save-button">
                            Save
                        </button>
                    </div>
                </form>
            </div>

        );
    }
}

const mapStateToProps = (state: any) => ({
    currentProductList: state.product.currentProductList
})
export default connect(mapStateToProps)(AddProduct);