import productTypes from "./product.types";
import products from '../../data/products.json'

const INITIAL_STATE = {
    currentCartCount: 2,
    currentProductList: products
};

const productReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case productTypes.SET_CURRENT_CART_COUNT:
            return {
                currentCartCount: state.currentCartCount + 1,
                currentProductList: state.currentProductList
            };
        case productTypes.SET_CURRENT_PRODUCT_LIST:
            return {
                currentCartCount: state.currentCartCount,
                currentProductList: 
                [...state.currentProductList, action.productItem]
            }
        default:
            return state;
    }
}

export default productReducer;
