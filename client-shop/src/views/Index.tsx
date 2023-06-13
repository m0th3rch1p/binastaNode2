import Slider from "@/components/index/Slider"
import ProductCategories from "@/components/index/ProductCategories"
import Products from "@/components/index/Products"
import Discounts from "@/components/index/Discounts"

import banner1 from "@/assets/images/banner-1.png";
import banner2 from "@/assets/images/banner-2.png";
import banner3 from "@/assets/images/banner-3.png";
import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <Slider />
      <ProductCategories />
      <section className="banners mb-25">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay="0">
                            <img src={ banner1 } alt="" />
                            <div className="banner-text">
                                <h4>
                                    Everyday Fresh & <br />Clean with Our<br />
                                    Products
                                </h4>
                                <Link to="/products" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                            <img src={ banner2 } alt="" />
                            <div className="banner-text">
                                <h4>
                                    Make your Breakfast<br />
                                    Healthy and Easy
                                </h4>
                                <Link to="/products" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-md-none d-lg-flex">
                        <div className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                            <img src={ banner3 } alt="" />
                            <div className="banner-text">
                                <h4>The best Organic <br />Products Online</h4>
                                <Link to="/products" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      <Products />
      <Discounts />
    </>
  )
}

export default Index