import React, { useContext } from 'react';
import 'styles/components/ProductItem.scss';
import AppContext from 'context/AppContext';

import addCartImage from 'icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	// conect this pages with the custom hook to take the new info
	const { addToCart } = useContext(AppContext);
	
	const handleClick = item => {
		addToCart(item);
	}
 
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addCartImage} alt="Cart-img" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;