import { useAppSelector } from "@/store/hooks";
import { Cart } from "@/store/reducers/cartSlice";
import { Product } from "@/store/reducers/productsSlice";
import { Link } from "react-router-dom";

function Products({ products } : {products: Product[]}) {
    const cart: Cart = useAppSelector((state) => state.cart);
    
    return (
        <>
            <div className="row product-grid">
                    {
                        products?.map(product => (
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6" key={product.slug}>
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <Link to={ `/product/${product.slug}` }>
                                        <img className="default-img" src={ product?.images?.[0]?.url } style={{
                                            maxHeight: "177px"
                                        }} alt="" />
                                        <img className="hover-img" src={ product?.images?.[1]?.url } alt="" />
                                    </Link>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="hot">Hot</span>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">{ product.category_name }</a>
                                </div>
                                <h2><Link to={ `/product/${product.slug}` }>{ product.name }</Link></h2>
                                <div className="product-rate-cover">
                                    <div className="product-rate d-inline-block">
                                        <div className="product-rating" style={{
                                            width: "90%"
                                        }}></div>
                                    </div>
                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                </div>
                                <div className="product-card-bottom">
                                    <div className="product-price">
                                        <span>ksh.{ product?.variations?.[0]?.buy_price }</span>
                                        {/* <span className="old-price">$32.8</span> */}
                                    </div>
                                    <div className="add-cart">
                                        <a  className="add" href="#0"><i className="fi-rs-shopping-cart mr-5"></i>{ cart.products.find((productInCart) => productInCart.product.slug === product.slug) ? 'In Cart' : 'Add' }</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                </div>
        </>
    )
}

export default Products