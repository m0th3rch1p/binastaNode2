function Categories() {
    return (
        <>
            <div className="col-lg-1-5 primary-sidebar sticky-sidebar" style={{
                position: "relative",
                overflow: "visible",
                boxSizing: "border-box",
                minHeight: "1px"
            }}>

                <div className="theiaStickySidebar" style={{
                    paddingTop: "0px",
                    paddingBottom: "1px",
                    position: "static",
                    transform: "none"
                }}><div className="sidebar-widget widget-category-2 mb-30">
                        <h5 className="section-title style-1 mb-30">Category</h5>
                        <ul>
                            <li>
                                <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-1.svg" alt="" />Milks &amp; Dairies</a><span className="count">11</span>
                            </li>
                            <li>
                                <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-2.svg" alt="" />Clothing</a><span className="count">13</span>
                            </li>
                            <li>
                                <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-3.svg" alt="" />Pet Foods </a><span className="count">2</span>
                            </li>
                            <li>
                                <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-4.svg" alt="" />Baking material</a><span className="count">3</span>
                            </li>
                            <li>
                                <a href="shop-grid-right.html"> <img src="assets/imgs/theme/icons/category-5.svg" alt="" />Fresh Fruit</a><span className="count">0</span>
                            </li>
                        </ul>
                    </div>
                    <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none animated" style={{
                        visibility: "visible"
                    }}>
                        <img src="assets/imgs/banner/banner-11.png" alt="" />
                        <div className="banner-text">
                            <span>Oganic</span>
                            <h4>
                                Save 17% <br />
                                on <span className="text-brand">Oganic</span><br />
                                Juice
                            </h4>
                        </div>
                    </div></div></div>
        </>
    )
}

export default Categories