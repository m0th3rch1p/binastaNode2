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
                                        <a className="add" href="#0"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
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
            </div>
        </>
    )
}

export default Products