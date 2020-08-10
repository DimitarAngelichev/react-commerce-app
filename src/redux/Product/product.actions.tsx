import productTypes from './product.types';
import ProductItemInterface from "../../interfaces/ProductItemInterface";

export const addProduct = (productItem: ProductItemInterface) => ({
    type: productTypes.SET_CURRENT_PRODUCT_LIST,
    productItem
})

export const addCartCount = () => ({
    type: productTypes.SET_CURRENT_CART_COUNT
})
