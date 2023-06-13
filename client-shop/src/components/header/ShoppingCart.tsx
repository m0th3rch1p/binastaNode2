import { useAppSelector, useAppDispatch } from "@/store/hooks"
import { Link } from "react-router-dom";
import { removeCart, Cart } from "@/store/reducers/cartSlice";

import shoppingCartIcon from "@/assets/images/icon-cart.svg";

function ShoppingCartComponent() {
    const dispatch = useAppDispatch();
    const cart: Cart = useAppSelector((state) => state.cart);
    
    const onRemoveCartProduct = (e: React.MouseEvent<HTMLButtonElement>, slug: string) => {
        dispatch(removeCart(slug));
    };
    return (
        <>
            <div className="header-action-icon-2">
                <Link className="mini-cart-icon" to="/">
                    <img alt="Nest" src={ shoppingCartIcon } />
                    <span className="pro-count white">{ cart.products.length }</span>
                </Link>
                <div className="cart-dropdown-wrap cart-dropdown-hm2">
                    <ul>
                        {
                            cart.products.map(({product, selectedVariation, quantity}) => (
                                <li key={ product.slug }>
                                    <div className="shopping-cart-img">
                                        <a href="shop-product-right.html"><img alt="Nest" src="assets/imgs/shop/thumbnail-3.jpg" /></a>
                                    </div>
                                    <div className="shopping-cart-title">
                                        <h4><Link to={`/products/${product.slug}`}>{ product.name }</Link></h4>
                                        <h3><span>{ quantity } × </span>ksh.{ selectedVariation.buy_price }</h3>
                                    </div>
                                    <div className="shopping-cart-delete">
                                        <button onClick={(event) => onRemoveCartProduct(event, product.slug as string) }><i className="fi-rs-cross-small"></i></button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="shopping-cart-footer">
                        <div className="shopping-cart-total">
                            <h4>Total <span>ksh.{ cart.total }</span></h4>
                        </div>
                        <div className="shopping-cart-button">
                            <a href="shop-cart.html">View cart</a>
                            <a href="shop-checkout.html">Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCartComponent;