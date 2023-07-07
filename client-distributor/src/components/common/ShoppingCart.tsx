import { useAppSelector, useAppDispatch } from "@/store/hooks"
import { removeCart } from "@/store/reducers/cartSlice";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
function ShoppingCart() {
    const cart = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const [shoppingCartState, setShoppingCartState] = useState({
        show: false
    });
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleOutsideClick (this: Document, e: MouseEvent) {

            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setShoppingCartState((state) => ({
                    ...state,
                    show: false
                }));
            }
        }

        document.addEventListener("mousedown", handleOutsideClick)
    
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [wrapperRef]);
    return (
        <>
            <a href="#0" className="nav-link nav-link-notify" data-count={cart.products.length} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                setShoppingCartState((state) => ({
                    ...state,
                    show: !state.show
                }));
            }} data-bs-toggle="dropdown">
                <i className="bi bi-cart2 icon-lg"></i>
            </a>
        <div ref={wrapperRef} className={`dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 ${shoppingCartState.show ? 'show' : ''}`} style={{
            margin: "0px",
            position: "absolute",
            inset: "0px auto auto 0px",
            transform: "translate(-265px, 90px)"
        }}>
            <h6 className="m-0 px-4 py-3 border-bottom">Shopping Cart</h6>
            <div className="dropdown-menu-body" tabIndex={3} style={{
                overflow: "hidden",
                outline: "none"
            }}>
                {
                    cart.products.map((product) => (
                        <div key={product.product.id} className="list-group list-group-flush">
                            <div className="list-group-item d-flex align-items-center">
                                <a href="#0" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    e.preventDefault();
                                    dispatch(removeCart(product.product.id));     
                                }} className="text-danger me-3" title="Remove">
                                    <i className="bi bi-trash"></i>
                                </a>
                                <Link to={`/product/${product.product.slug}`} className="me-3 flex-shrink-0 ">
                                    <img src={ product.product.images?.[0].url } className="rounded" width="60" alt="..." />
                                </Link>
                                <div>
                                    <h6>{ product.product.name }</h6>
                                    <div>{product.quantity} x ksh.{ product.selectedVariation.buy_price }</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h6 className="m-0 px-4 py-3 border-top small">Total : <strong className="text-primary">ksh.{ cart.total }</strong></h6>
            <Link to="/checkout" className="m-3 btn btn-sm btn-primary">Checkout</Link>
            <div id="ascrail2002" className="nicescroll-rails nicescroll-rails-vr" style={{
                width: "8px",
                zIndex: "1000",
                cursor: "default",
                position: "absolute",
                top: "0px",
                left: "-8px",
                height: "0px",
                display: "none"
            }}><div className="nicescroll-cursors" style={{
                position: "relative",
                top: "0px",
                float: "right",
                width: "6px",
                height: "0px",
                backgroundColor: "rgb(66, 66, 66)",
                border: "1px solid rgb(255, 255, 255)",
                backgroundClip: "padding-box",
                padding: "box",
                borderRadius: "5px"
            }}
            ></div></div><div id="ascrail2002-hr" className="nicescroll-rails nicescroll-rails-hr" style={{
                height: "8px",
                zIndex: "1000",
                top: "-8px",
                left: "0px",
                position: "absolute",
                cursor: "default",
                display: "none"
            }}><div className="nicescroll-cursors" style={{
                position: "absolute",
                top: "0px",
                height: "6px",
                width: "0px",
                backgroundColor: "rgb(66, 66, 66)",
                border: "1px solid rgb(255, 255, 255)",
                backgroundClip: "padding-box",
                borderRadius: "5px"
            }}></div></div></div>
        </>
    )
}

export default ShoppingCart