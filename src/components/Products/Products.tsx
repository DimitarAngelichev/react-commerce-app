import React, { Fragment } from "react";
import { connect } from 'react-redux';
import ProductItem from "./ProductItem";
import ProductItemInterface from "../../interfaces/ProductItemInterface";

class Products extends React.Component<any, any> {

    render() {
        return (
            <Fragment>
                {this.props.currentProducts.map((product: ProductItemInterface) => (
                    <ProductItem
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </Fragment>
        );
    }
};

const mapStateToProps = (state: any) => ({
    currentProducts: state.product.currentProductList
})

export default connect(mapStateToProps)(Products)