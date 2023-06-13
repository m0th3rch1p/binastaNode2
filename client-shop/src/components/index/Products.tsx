import useFetchProducts from "@/hooks/useFetchProducts";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { ProductVariation } from "@/types/ProductVariation.type";
import { addCart } from "@/store/reducers/cartSlice";
import { Product } from "@/store/reducers/productsSlice";
import { Link } from "react-router-dom";

function Products() {
    const dispatch  = useAppDispatch();
    const { products, isLoading, isError, isSuccess } = useFetchProducts();
    const cart = useAppSelector(state => state.cart);
    
    const onAddCartProduct = (e: React.MouseEvent<HTMLButtonElement>, product: Product, selectedVariation: ProductVariation | undefined) => {
        dispatch(addCart({ 
            product,
            selectedVariation,
            quantity: 1
        }));
    };
    return (
        <section className="product-tabs section-padding position-relative">
            <div className="container">
                <div className="section-title style-2 wow animate__ animate__fadeIn animated" style={
                    {
                        visibility: "visible",
                        animationName: "fadeIn",
                    }
                }>
                    <h3>Popular Products</h3>
                </div>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                        <div className="row product-grid-4">
                            {
                                products ? products.map(product => (
                                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6" key={product.slug}>
                                <div className="product-cart-wrap mb-30 wow animate__ animate__fadeIn animated" data-wow-delay=".1s" style={{
                                    visibility: "visible",
                                    animationDelay: "0.1s",
                                    animationName: "fadeIn"
                                }}>
                                    <div className="product-img-action-wrap">
                                        <div className="product-img product-img-zoom">
                                            <Link to={ `/product/${product?.slug}` }>
                                                <img className="default-img" src={product?.images?.[0].url} alt="" />
                                                <img className="hover-img" src={product?.images?.[1]?.url} alt="" />
                                            </Link>
                                        </div>
                                        <div className="product-badges product-badges-position product-badges-mrg">
                                            <span className="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div className="product-content-wrap">
                                        <div className="product-category">
                                            <Link to={ `/product/${product?.slug}` }>{ product.category_name  }</Link>
                                        </div>
                                        <h2><Link to={ `/product/${product?.slug}` }>{ product.name }</Link></h2>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>ksh.{ product.variations?.[0].buy_price }</span>
                                                {/* <span className="old-price">$32.8</span> */}
                                            </div>
                                            <div className="add-cart">
                                                <button className="add" onClick={ (event) => onAddCartProduct(event, product, product?.variations?.[0]) }><i className="fi-rs-shopping-cart mr-5"></i>{ cart.products.find((cartProduct) => cartProduct.product.slug === product.slug) ? 'In Cart' : 'Add' }</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                                )) : (<>Fething Products....</>)
                            }                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Products;