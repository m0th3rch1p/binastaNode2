import SiteSlider from "@/components/index/SiteSlider";
import QueryForm from "@/components/index/QueryForm";
import Blog from "@/components/index/Blog";

function Index () {
    return (
        <>
            <SiteSlider />
            {/* Start ypur Business */}
            <section className="health-guide">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 section-wrapper text-center">
                            <h3 className="section-title">Start Your Own Business</h3>
                            <p>Start making extra money today! Begin with a simple registration process, and build and grow your business at your own pace. We will be with you every step of the way, providing extraordinary support and quality products.</p>
                        </div>
                    </div>
                    <div className="row grid">

                        <div className="col-lg-4 col-md-6 text-center grid-item animation" data-animation="fadeInLeft" data-animation-delay="0.1s">
                            <div className="single-health-block  d-flex flex-column align-items-center justify-content-center">
                                <div className="icon-box">
                                    <i className="icofont icofont-handshake-deal"></i>
                                </div>
                                <h4>Low Startup Costs</h4>
                                <p>Getting access to amazing products and resources to build and manage a full fledged enterprise has never been simpler!</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 grid-item animation" data-animation="zoomIn" data-animation-delay="0.7s">
                            <div className="single-health-block-big text-center">
                                <img src="@/assets/images/all-img/health_add.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center grid-item  animation" data-animation="fadeInRight" data-animation-delay="0.3s">
                            <div className="single-health-block  d-flex flex-column align-items-center justify-content-center">
                                <div className="icon-box">
                                    <i className="icofont icofont-live-support"></i>
                                </div>
                                <h4>24/7 Individual Support</h4>
                                <p>We provide you with the products, information, tools and resources to ensure you are fully equipped to take advantage of this amazing opportunity!</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center grid-item animation" data-animation="fadeInLeft" data-animation-delay="0.2s">
                            <div className="single-health-block  d-flex flex-column align-items-center justify-content-center">
                                <div className="icon-box">
                                    <i className="icofont icofont-sale-discount"></i>
                                </div>
                                <h4>Amazing Discounts</h4>
                                <p>Discover unbelievable discounts with Binasta! We take care of our partners by giving the most competitive prices in the market.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center grid-item animation" data-animation="fadeInRight" data-animation-delay="0.0.4s">
                            <div className="single-health-block  d-flex flex-column align-items-center justify-content-center">
                                <div className="icon-box">
                                    <i className="icofont icofont-chart"></i>
                                </div>
                                <h4>Track Your Progress</h4>
                                <p>Track your Progress: Our Platform offers powerful reports on an informative and intuitive dashboard to give you real time and insightful data to keep track of your business.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center grid-item animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                            <div className="single-health-block  d-flex flex-column align-items-center justify-content-center">
                                <div className="icon-box">
                                    <i className="icofont icofont-eye"></i>
                                </div>
                                <h4>Full Transparency</h4>
                                <p>We are committed to openness and straightforwardness through our binapoints system, allowing for a very fair and rewarding system!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <QueryForm />
            <Blog />

            {/* Call to action */}
            <section className="call-to-action">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7 text-center text-md-left">
                            <h3>The fastest way to loss weight in natural way!</h3>
                            <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet  accusam</p>
                        </div>
                        <div className="col-md-5 text-md-right text-center">
                            <a href="#">GET A FREE CONSULTATION!</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="promotion-area">
                <div className="appoinmentshpae-1">
                    <div className="innershape"></div>
                </div>
                <div className="appoinmentshpae-2">
                    <div className="innershape"></div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 section-wrapper no-margin text-md-center">
                            <h3 className="section-title">Over 10 Years Of Experience</h3>
                            <p>We have spent over 10 years setting up and perfecting our company, creating a system that provides a great experience to our partners and a catalog of quality products to boost health and wellness.</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-sm-6 animation" data-animation="fadeInDown" data-animation-delay="0.1s">
                                    <div className="media single-cosunter-block">
                                        <img className="mr-3" src="assets/images/all-img/counter_icon1.png" alt="" />
                                            <div className="media-body">
                                                <h5 className="mt-0 counter"><strong>5000</strong></h5>
                                                <p>Distributors</p>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 animation" data-animation="fadeInDown" data-animation-delay="0.1s">
                                    <div className="media single-cosunter-block">
                                        <img className="mr-3" src="assets/images/all-img/counter_icon2.png" alt="" />
                                            <div className="media-body">
                                                <h5 className="mt-0 counter"><strong>1200</strong></h5>
                                                <p>Happy Customers</p>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                                    <div className="media single-cosunter-block">
                                        <img className="mr-3" src="assets/images/all-img/counter_icon3.png" alt="" />
                                            <div className="media-body">
                                                <h5 className="mt-0 counter"><strong>3200</strong></h5>
                                                <p>Fat loss diet</p>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                                    <div className="media single-cosunter-block">
                                        <img className="mr-3" src="assets/images/all-img/counter_icon4.png" alt="" />
                                            <div className="media-body">
                                                <h5 className="mt-0 counter"><strong>4520</strong></h5>
                                                <p>Days Of Program</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Story */}
            <section className="success-story">
      <div className="container">
        <div className="row align-items-center owl-carousel active-story owl-loaded owl-drag">
          <div className="col-12 single_stroy">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <h3 className="section-title">Story Of Success</h3>
                <p>
                  <strong>
                    I want the best in life. Binasta Products keeps me healthy and flawless. Binasta affiliate marketing program keeps my money flowing.
                    What else would I wish for in life?
                  </strong>
                </p>
                <h4>Mary maya</h4>
              </div>
              <div className="col-lg-6 col-md-5 align-self-md-center">
                <div className="strong-man">
                  <img className="" src="https://binasta.co.ke/main/images/all-img/success.webp" data-src="/main/images/all-img/success.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Index;