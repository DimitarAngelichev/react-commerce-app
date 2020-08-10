import React, { Component } from 'react';
import './OrderItem.css';
import OrderItemInterface from "../../interfaces/OrderItemInterface";
import ProductItemInterface from "../../interfaces/ProductItemInterface";

export class OrderItem extends Component<OrderItemInterface>{

    render() {
        const { id, status, price, currency, items } = this.props;


        return (
            <tr>
                <td className="order-number">
                    <p>Order # {id}</p>
                </td>
                
                <td className="order-items">
                    <ul>
                        {items.map((item: ProductItemInterface) => (
                            <li>{item.name}</li>
                        ))}
                    </ul>
                </td>

                <td className="price">
                    <p>{price} {currency}</p>

                </td>
                
                <td className="status">
                    <p>{status}</p>

                </td>
            </tr>
        );
    }
};

export default OrderItem;