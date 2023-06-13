import { useState } from "react"
import { useLocation } from "react-router-dom";
import { useFetchSingleProduct } from "@/hooks/useFetchProducts";
import { ProductVariation } from "@/types/ProductVariation.type";

function Product() {
    const { state } = useLocation();
    const { product, isLoading, isSuccess } = useFetchSingleProduct(state.slug);
    
    const [ selectedVariation, setSelecetedVariation ] = useState(product?.variations?.[0].id);
    const [ quantity, setQuantity ] = useState(1);
    


    return (
        <div className="container mb-30">
            <div className="row">
                <div className="col-xl-10 col-lg-12 m-auto">
                    <div className="product-detail accordion-detail">
                        <div className="row mb-50 mt-30">
                            <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                <div className="detail-gallery">
                                    <span className="zoom-icon"><i className="fi-rs-search"></i></span>
                                    <div className="product-image-slider slick-initialized slick-slider">
                                        <img src={ product?.images?.[0].url } alt="product image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="detail-info pr-30 pl-30">
                                    <span className="stock-status out-stock"> Sale Off </span>
                                    <h2 className="title-detail">{ product?.name }</h2>
                                    <div className="product-detail-rating">
                                        <div className="product-rate-cover text-end">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{
                                                    width: "90%"
                                                }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix product-price-cover">
                                        <div className="product-price primary-color float-left">
                                            <span className="current-price text-brand">ksh.{ (product?.variations?.[0].buy_price) as number }</span>
                                            {/* <span>
                                                <span className="save-price font-md color3 ml-15">26% Off</span>
                                                <span className="old-price font-md ml-15">$52</span>
                                            </span> */}
                                        </div>
                                    </div>
                                    <div className="short-desc mb-30">
                                        <p className="font-lg">{ product?.description }</p>
                                    </div>
                                    <div className="attr-detail attr-size mb-30">
                                        <strong className="mr-10">Size / Weight: </strong>
                                        <ul className="list-filter size-filter font-small">
                                            {
                                                product?.variations?.map((variation: ProductVariation) => <li><a href="#">{ variation.variation }</a></li>)
                                            }
                                        </ul>
                                    </div>
                                    <div className="detail-extralink mb-50">
                                        <div className="detail-qty border radius">
                                            <a href="#" className="qty-down"><i className="fi-rs-angle-small-down"></i></a>
                                            <span className="qty-val">1</span>
                                            <a href="#" className="qty-up"><i className="fi-rs-angle-small-up"></i></a>
                                        </div>
                                        <div className="product-extra-link2">
                                            <button type="submit" className="button button-add-to-cart"><i className="fi-rs-shopping-cart"></i>Add to cart</button>
                                            <a aria-label="Add To Wishlist" className="action-btn hover-up" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                            <a aria-label="Compare" className="action-btn hover-up" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-60">
                            <div className="col-12">
                                <h2 className="section-title style-1 mb-30">Related products</h2>
                            </div>
                            <div className="col-12">
                                <div className="row related-products">
                                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap hover-up">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html" tabIndex={0}>
                                                        <img className="default-img" src="assets/imgs/shop/product-2-1.jpg" alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <h2><a href="shop-product-right.html" tabIndex={0}>Ulstra Bass Headphone</a></h2>
                                                <div className="rating-result" title="90%">
                                                    <span> </span>
                                                </div>
                                                <div className="product-price">
                                                    <span>$238.85 </span>
                                                    <span className="old-price">$245.8</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap hover-up">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html" tabIndex={0}>
                                                        <img className="default-img" src="assets/imgs/shop/product-3-1.jpg" alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                    <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html" tabIndex={0}><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html" tabIndex={0}><i className="fi-rs-shuffle"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="sale">-12%</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <h2><a href="shop-product-right.html" tabIndex={0}>Smart Bluetooth Speaker</a></h2>
                                                <div className="rating-result" title="90%">
                                                    <span> </span>
                                                </div>
                                                <div className="product-price">
                                                    <span>$138.85 </span>
                                                    <span className="old-price">$145.8</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                                        <div className="product-cart-wrap hover-up">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html" tabIndex={0}>
                                                        <img className="default-img" src="assets/imgs/shop/product-4-1.jpg" alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                    <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html" tabIndex={0}><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html" tabIndex={0}><i className="fi-rs-shuffle"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="new">New</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <h2><a href="shop-product-right.html" tabIndex={0}>HomeSpeak 12UEA Goole</a></h2>
                                                <div className="rating-result" title="90%">
                                                    <span> </span>
                                                </div>
                                                <div className="product-price">
                                                    <span>$738.85 </span>
                                                    <span className="old-price">$1245.8</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-12 col-sm-6 d-lg-block d-none">
                                        <div className="product-cart-wrap hover-up mb-0">
                                            <div className="product-img-action-wrap">
                                                <div className="product-img product-img-zoom">
                                                    <a href="shop-product-right.html" tabIndex={0}>
                                                        <img className="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                                                        <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="product-action-1">
                                                    <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-search"></i></a>
                                                    <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="shop-wishlist.html" tabIndex={0}><i className="fi-rs-heart"></i></a>
                                                    <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html" tabIndex={0}><i className="fi-rs-shuffle"></i></a>
                                                </div>
                                                <div className="product-badges product-badges-position product-badges-mrg">
                                                    <span className="hot">Hot</span>
                                                </div>
                                            </div>
                                            <div className="product-content-wrap">
                                                <h2><a href="shop-product-right.html" tabIndex={0}>Dadua Camera 4K 2022EF</a></h2>
                                                <div className="rating-result" title="90%">
                                                    <span> </span>
                                                </div>
                                                <div className="product-price">
                                                    <span>$89.8 </span>
                                                    <span className="old-price">$98.8</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product