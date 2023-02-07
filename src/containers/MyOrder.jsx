import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import 'styles/containers/MyOrder.scss';
import AppContext from 'context/AppContext'

import arrow from 'icons/arrow.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	const totalCart = () => {
		const reducer = (total, currentValue) => total + currentValue.price;
		const totalElements = state.cart.reduce(reducer, 0);

		return totalElements;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(item => (
					<OrderItem item={item} key={`orderItem-${item.id}`} />
					// we put `orderItem-${item.id}` to tcreate a custom id and not have any problem with the same functionality we add in other components
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${totalCart()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;