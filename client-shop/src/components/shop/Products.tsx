import useFetchProductCategories from "@/hooks/useFetchProductCategories"
import useFetchProducts from "@/hooks/useFetchProducts";

function Products() {
    const {  categories, isLoading: isFetchCategoriesLoading, isError: isFetchCategoriesError } = useFetchProductCategories();
    const {  products, isLoading: isFetchProdcutsLoading, isError: isFetchProductError } = useFetchProducts();
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
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-1-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-1-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="hot">Hot</span>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Snack</a>
                                </div>
                                <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoe</a></h2>
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
                                        <span>$28.85</span>
                                        <span className="old-price">$32.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-2-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="sale">Sale</span>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                </div>
                                <h2><a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a></h2>
                                <div className="product-rate-cover">
                                    <div className="product-rate d-inline-block">
                                        <div className="product-rating" style={{
                                            width: "80%"
                                        }}></div>
                                    </div>
                                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                                </div>
                                <div>
                                    <span className="font-small text-muted">By <a href="vendor-details-1.html">Stouffer</a></span>
                                </div>
                                <div className="product-card-bottom">
                                    <div className="product-price">
                                        <span>$52.85</span>
                                        <span className="old-price">$55.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-3-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="new">New</span>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Snack</a>
                                </div>
                                <h2><a href="shop-product-right.html">Angie’s Boomchickapop Sweet &amp; Salty</a></h2>
                                <div className="product-rate-cover">
                                    <div className="product-rate d-inline-block">
                                        <div className="product-rating" style={{
                                            width: "85%"
                                        }}></div>
                                    </div>
                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                </div>
                                <div>
                                    <span className="font-small text-muted">By <a href="vendor-details-1.html">StarKist</a></span>
                                </div>
                                <div className="product-card-bottom">
                                    <div className="product-price">
                                        <span>$48.85</span>
                                        <span className="old-price">$52.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-4-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Vegetables</a>
                                </div>
                                <h2><a href="shop-product-right.html">Foster Farms Takeout Crispy Classic</a></h2>
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
                                        <span>$17.85</span>
                                        <span className="old-price">$19.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="best">-14%</span>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Pet Foods</a>
                                </div>
                                <h2><a href="shop-product-right.html">Blue Diamond Almonds Lightly</a></h2>
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
                                        <span>$23.85</span>
                                        <span className="old-price">$25.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-6-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                </div>
                                <h2><a href="shop-product-right.html">Chobani Complete Vanilla Greek</a></h2>
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
                                        <span>$54.85</span>
                                        <span className="old-price">$55.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Meats</a>
                                </div>
                                <h2><a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle</a></h2>
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
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="sale">Sale</span>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Snack</a>
                                </div>
                                <h2><a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan</a></h2>
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
                                        <span>$35.85</span>
                                        <span className="old-price">$37.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="hot">Hot</span>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Coffes</a>
                                </div>
                                <h2><a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets</a></h2>
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
                                        <span>$23.85</span>
                                        <span className="old-price">$25.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Cream</a>
                                </div>
                                <h2><a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream</a></h2>
                                <div className="product-rate-cover">
                                    <div className="product-rate d-inline-block">
                                        <div className="product-rating" style={{
                                            width: "50%",
                                        }}></div>
                                    </div>
                                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                                </div>
                                <div>
                                    <span className="font-small text-muted">By <a href="vendor-details-1.html">Tyson</a></span>
                                </div>
                                <div className="product-card-bottom">
                                    <div className="product-price">
                                        <span>$22.85</span>
                                        <span className="old-price">$24.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-1-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-1-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="hot">Hot</span>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Snack</a>
                                </div>
                                <h2><a href="shop-product-right.html">Seeds of Change Organic Quinoe</a></h2>
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
                                        <span>$28.85</span>
                                        <span className="old-price">$32.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-2-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="sale">Sale</span>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                </div>
                                <h2><a href="shop-product-right.html">All Natural Italian-Style Chicken Meatballs</a></h2>
                                <div className="product-rate-cover">
                                    <div className="product-rate d-inline-block">
                                        <div className="product-rating" style={{
                                            width: "80%"
                                        }}></div>
                                    </div>
                                    <span className="font-small ml-5 text-muted"> (3.5)</span>
                                </div>
                                <div>
                                    <span className="font-small text-muted">By <a href="vendor-details-1.html">Stouffer</a></span>
                                </div>
                                <div className="product-card-bottom">
                                    <div className="product-price">
                                        <span>$52.85</span>
                                        <span className="old-price">$55.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-3-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="new">New</span>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Snack</a>
                                </div>
                                <h2><a href="shop-product-right.html">Angie’s Boomchickapop Sweet &amp; Salty</a></h2>
                                <div className="product-rate-cover">
                                    <div className="product-rate d-inline-block">
                                        <div className="product-rating" style={{
                                            width: "85%"
                                        }}></div>
                                    </div>
                                    <span className="font-small ml-5 text-muted"> (4.0)</span>
                                </div>
                                <div>
                                    <span className="font-small text-muted">By <a href="vendor-details-1.html">StarKist</a></span>
                                </div>
                                <div className="product-card-bottom">
                                    <div className="product-price">
                                        <span>$48.85</span>
                                        <span className="old-price">$52.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-4-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Vegetables</a>
                                </div>
                                <h2><a href="shop-product-right.html">Foster Farms Takeout Crispy Classic</a></h2>
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
                                        <span>$17.85</span>
                                        <span className="old-price">$19.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="best">-14%</span>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Pet Foods</a>
                                </div>
                                <h2><a href="shop-product-right.html">Blue Diamond Almonds Lightly</a></h2>
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
                                        <span>$23.85</span>
                                        <span className="old-price">$25.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-6-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                </div>
                                <h2><a href="shop-product-right.html">Chobani Complete Vanilla Greek</a></h2>
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
                                        <span>$54.85</span>
                                        <span className="old-price">$55.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Meats</a>
                                </div>
                                <h2><a href="shop-product-right.html">Canada Dry Ginger Ale – 2 L Bottle</a></h2>
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
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="sale">Sale</span>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Snack</a>
                                </div>
                                <h2><a href="shop-product-right.html">Encore Seafoods Stuffed Alaskan</a></h2>
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
                                        <span>$35.85</span>
                                        <span className="old-price">$37.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="hot">Hot</span>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Coffes</a>
                                </div>
                                <h2><a href="shop-product-right.html">Gorton’s Beer Battered Fish Fillets</a></h2>
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
                                        <span>$23.85</span>
                                        <span className="old-price">$25.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                        <div className="product-cart-wrap">
                            <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                    <a href="shop-product-right.html">
                                        <img className="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                                        <img className="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="product-action-1">
                                    <a aria-label="Add To Wishlist" className="action-btn" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                    <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                    <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                </div>
                            </div>
                            <div className="product-content-wrap">
                                <div className="product-category">
                                    <a href="shop-grid-right.html">Cream</a>
                                </div>
                                <h2><a href="shop-product-right.html">Haagen-Dazs Caramel Cone Ice Cream</a></h2>
                                <div className="product-rate-cover">
                                    <div className="product-rate d-inline-block">
                                        <div className="product-rating" style={{
                                            width: "50%",
                                        }}></div>
                                    </div>
                                    <span className="font-small ml-5 text-muted"> (2.0)</span>
                                </div>
                                <div>
                                    <span className="font-small text-muted">By <a href="vendor-details-1.html">Tyson</a></span>
                                </div>
                                <div className="product-card-bottom">
                                    <div className="product-price">
                                        <span>$22.85</span>
                                        <span className="old-price">$24.8</span>
                                    </div>
                                    <div className="add-cart">
                                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination-area mt-20 mb-20">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-start">
                            <li className="page-item">
                                <a className="page-link" href="#"><i className="fi-rs-arrow-small-left"></i></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link dot" href="#">...</a></li>
                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#"><i className="fi-rs-arrow-small-right"></i></a>
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