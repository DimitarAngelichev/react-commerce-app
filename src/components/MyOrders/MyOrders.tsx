import React, { Fragment } from 'react';
import OrderItemInterface from "../../interfaces/OrderItemInterface";
import OrderItem from "./OrderItem";
import orders from '../../data/orders.json'
import './MyOrders.css';

const MyOrders = () => {
    
    return (
        <div className="orders-table" >
            <div className="headline">
                <h1>My Orders</h1>
            </div>

            <Fragment>
                <table className="order-container">

                    {orders.map((order: OrderItemInterface) => (
                        <OrderItem
                            id={order.id}
                            status={order.status}
                            price={order.price}
                            currency={order.currency}
                            items={order.items}
                        />
                    ))}
                    
                </table>
            </Fragment>

        </div>
    );

}


export default MyOrders;