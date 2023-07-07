import { Link } from "react-router-dom";
import { useFetchProductsQuery } from "@/store/reducers/productsSlice";

function Discounts() {
    const { data: products, isLoading, isError, isSuccess } = useFetchProductsQuery();
    return (
        <section className="section-padding mb-30">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp" data-wow-delay="0">
                        <h4 className="section-title style-1 mb-30 animated animated">Top Selling</h4>
                        <div className="product-list-small animated animated">
                            {
                                products?.map((product) => (
                                    <article key={product.slug} className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <Link to={`product/${product.slug}`} state={{slug: product.slug}}><img src={product?.images?.[0].url} alt="" /></Link>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                            <Link to={`product/${product.slug}`} state={{slug: product.slug}}>{product.name}</Link>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{
                                                        width: "90%"
                                                    }}></div>
                                                </div>
                                            </div>
                                            <div className="product-price">
                                                <span>ksh.{product.variations?.[0].buy_price}</span>
                                                {/* <span className="old-price">$33.8</span> */}
                                            </div>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-md-0 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                        <h4 className="section-title style-1 mb-30 animated animated">Trending Products</h4>
                        <div className="product-list-small animated animated">
                            {
                                products?.map((product) => (
                                    <article key={product.slug} className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="shop-product-right.html"><img src={product?.images?.[0].url} alt="" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                            <Link to={`product/${product.slug}`} state={{slug: product.slug}}>{product.name}</Link>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{
                                                        width: "90%"
                                                    }}></div>
                                                </div>
                                            </div>
                                            <div className="product-price">
                                                <span>ksh.{product?.variations?.[0].buy_price}</span>
                                                {/* <span className="old-price">$33.8</span> */}
                                            </div>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                        <h4 className="section-title style-1 mb-30 animated animated">Recently added</h4>
                        <div className="product-list-small animated animated">
                            {
                                products?.map((product) => (
                                    <article key={product.slug} className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="shop-product-right.html"><img src={product?.images?.[0].url} alt="" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                            <Link to={`product/${product.slug}`} state={{slug: product.slug}}>{product.name}</Link>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{
                                                        width: "90%"
                                                    }}></div>
                                                </div>
                                            </div>
                                            <div className="product-price">
                                                <span>ksh.{product?.variations?.[0].buy_price}</span>
                                                {/* <span className="old-price">$33.8</span> */}
                                            </div>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                        <h4 className="section-title style-1 mb-30 animated animated">Top Rated</h4>
                        <div className="product-list-small animated animated">
                            {
                                products?.map((product) => (
                                    <article key={product.slug} className="row align-items-center hover-up">
                                        <figure className="col-md-4 mb-0">
                                            <a href="shop-product-right.html"><img src={product?.images?.[0].url} alt="" /></a>
                                        </figure>
                                        <div className="col-md-8 mb-0">
                                            <h6>
                                            <Link to={`product/${product.slug}`} state={{slug: product.slug}}>{product.name}</Link>
                                            </h6>
                                            <div className="product-rate-cover">
                                                <div className="product-rate d-inline-block">
                                                    <div className="product-rating" style={{
                                                        width: "90%"
                                                    }}></div>
                                                </div>
                                            </div>
                                            <div className="product-price">
                                                <span>ksh.{product.variations?.[0].buy_price}</span>
                                                {/* <span className="old-price">$33.8</span> */}
                                            </div>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discounts;