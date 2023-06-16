import useFetchProducts from "@/hooks/useFetchProducts";
import { Link } from "react-router-dom";

function Products() {
    const {  products, currentOffset, setCurrentOffset, isLoading: isFetchProdcutsLoading, isError: isFetchProductError } = useFetchProducts();
    return (
        <>
            <div className="col-lg-4-5">
                <div className="shop-product-fillter">
                    <div className="totall-product">
                        <p>We found <strong className="text-brand">{ products?.length }</strong> items for you!</p>
                    </div>
                    <div className="sort-by-product-area">
                        <div className="sort-by-cover mr-10">
                            <div className="sort-by-product-wrap">
                                <div className="sort-by">
                                    <span><i className="fi-rs-apps"></i>Show:</span>
                                </div>
                                <div className="sort-by-dropdown-wrap">
                                    <span> 50 <i className="fi-rs-angle-small-down"></i></span>
                                </div>
                            </div>
                            <div className="sort-by-dropdown">
                                <ul>
                                    <li><a className="active" href="#">50</a></li>
                                    <li><a href="#">100</a></li>
                                    <li><a href="#">150</a></li>
                                    <li><a href="#">200</a></li>
                                    <li><a href="#">All</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sort-by-cover">
                            <div className="sort-by-product-wrap">
                                <div className="sort-by">
                                    <span><i className="fi-rs-apps-sort"></i>Sort by:</span>
                                </div>
                                <div className="sort-by-dropdown-wrap">
                                    <span> Featured <i className="fi-rs-angle-small-down"></i></span>
                                </div>
                            </div>
                            <div className="sort-by-dropdown">
                                <ul>
                                    <li><a className="active" href="#">Featured</a></li>
                                    <li><a href="#">Price: Low to High</a></li>
                                    <li><a href="#">Price: High to Low</a></li>
                                    <li><a href="#">Release Date</a></li>
                                    <li><a href="#">Avg. Rating</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row product-grid">
                    {
                        products?.map(product => (
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6" key={product.slug}>
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <Link to={ `/product/${product.slug}` }>
                                        <img className="default-img" src={ product?.images?.[0]?.url } alt="" />
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
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                </div>
                <div className="pagination-area mt-20 mb-20">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-middle">
                            <li className="page-item">
                                <button onClick={ () => setCurrentOffset((offset) => (offset > 10 ? offset - 10 : offset)) } className="page-link" disabled={ currentOffset < 10 }><i className="fi-rs-arrow-small-left"></i></button>
                            </li>
                            <li className="page-item">
                                <button onClick={ () => setCurrentOffset((offset) => (offset + 10))} className="page-link"><i className="fi-rs-arrow-small-right"></i></button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <section className="section-padding pb-5">
                    <div className="section-title">
                        <h3 className="">Deals Of The Day</h3>
                        <a className="show-all" href="shop-grid-right.html">
                            All Deals
                            <i className="fi-rs-angle-right"></i>
                        </a>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-cart-wrap style-2">
                                <div className="product-img-action-wrap">
                                    <div className="product-img">
                                        <a href="shop-product-right.html">
                                            <img src="assets/imgs/banner/banner-5.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="deals-countdown-wrap">
                                        <div className="deals-countdown" data-countdown="2025/03/25 00:00:00"><span className="countdown-section"><span className="countdown-amount hover-up">653</span><span className="countdown-period"> days </span></span><span className="countdown-section"><span className="countdown-amount hover-up">05</span><span className="countdown-period"> hours </span></span><span className="countdown-section"><span className="countdown-amount hover-up">59</span><span className="countdown-period"> mins </span></span><span className="countdown-section"><span className="countdown-amount hover-up">30</span><span className="countdown-period"> sec </span></span></div>
                                    </div>
                                    <div className="deals-content">
                                        <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoa, Brown</a></h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{
                                                    width: "90%"
                                                }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$32.85</span>
                                                <span className="old-price">$33.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-cart-wrap style-2">
                                <div className="product-img-action-wrap">
                                    <div className="product-img">
                                        <a href="shop-product-right.html">
                                            <img src="assets/imgs/banner/banner-6.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="deals-countdown-wrap">
                                        <div className="deals-countdown" data-countdown="2026/04/25 00:00:00"><span className="countdown-section"><span className="countdown-amount hover-up">1049</span><span className="countdown-period"> days </span></span><span className="countdown-section"><span className="countdown-amount hover-up">05</span><span className="countdown-period"> hours </span></span><span className="countdown-section"><span className="countdown-amount hover-up">59</span><span className="countdown-period"> mins </span></span><span className="countdown-section"><span className="countdown-amount hover-up">30</span><span className="countdown-period"> sec </span></span></div>
                                    </div>
                                    <div className="deals-content">
                                        <h2><a href="shop-product-right.html">Perdue Simply Smart Organics Gluten</a></h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{
                                                    width: "90%"
                                                }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (4.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">By <a href="vendor-details-1.html">Old El Paso</a></span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$24.85</span>
                                                <span className="old-price">$26.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-none d-lg-block">
                            <div className="product-cart-wrap style-2">
                                <div className="product-img-action-wrap">
                                    <div className="product-img">
                                        <a href="shop-product-right.html">
                                            <img src="assets/imgs/banner/banner-7.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="deals-countdown-wrap">
                                        <div className="deals-countdown" data-countdown="2027/03/25 00:00:00"><span className="countdown-section"><span className="countdown-amount hover-up">1383</span><span className="countdown-period"> days </span></span><span className="countdown-section"><span className="countdown-amount hover-up">05</span><span className="countdown-period"> hours </span></span><span className="countdown-section"><span className="countdown-amount hover-up">59</span><span className="countdown-period"> mins </span></span><span className="countdown-section"><span className="countdown-amount hover-up">30</span><span className="countdown-period"> sec </span></span></div>
                                    </div>
                                    <div className="deals-content">
                                        <h2><a href="shop-product-right.html">Signature Wood-Fired Mushroom</a></h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{
                                                    width: "80%"
                                                }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (3.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">By <a href="vendor-details-1.html">Progresso</a></span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$12.85</span>
                                                <span className="old-price">$13.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 d-none d-xl-block">
                            <div className="product-cart-wrap style-2">
                                <div className="product-img-action-wrap">
                                    <div className="product-img">
                                        <a href="shop-product-right.html">
                                            <img src="assets/imgs/banner/banner-8.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <div className="deals-countdown-wrap">
                                        <div className="deals-countdown" data-countdown="2025/02/25 00:00:00"><span className="countdown-section"><span className="countdown-amount hover-up">625</span><span className="countdown-period"> days </span></span><span className="countdown-section"><span className="countdown-amount hover-up">05</span><span className="countdown-period"> hours </span></span><span className="countdown-section"><span className="countdown-amount hover-up">59</span><span className="countdown-period"> mins </span></span><span className="countdown-section"><span className="countdown-amount hover-up">30</span><span className="countdown-period"> sec </span></span></div>
                                    </div>
                                    <div className="deals-content">
                                        <h2><a href="shop-product-right.html">Simply Lemonade with Raspberry Juice</a></h2>
                                        <div className="product-rate-cover">
                                            <div className="product-rate d-inline-block">
                                                <div className="product-rating" style={{
                                                    width: "80%"
                                                }}></div>
                                            </div>
                                            <span className="font-small ml-5 text-muted"> (3.0)</span>
                                        </div>
                                        <div>
                                            <span className="font-small text-muted">By <a href="vendor-details-1.html">Yoplait</a></span>
                                        </div>
                                        <div className="product-card-bottom">
                                            <div className="product-price">
                                                <span>$15.85</span>
                                                <span className="old-price">$16.8</span>
                                            </div>
                                            <div className="add-cart">
                                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Products