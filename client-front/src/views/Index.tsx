import SiteSlider from "@/components/index/SiteSlider";
import QueryForm from "@/components/index/QueryForm";
import Products from "@/components/index/Products";
import Blogs from "@/components/index/Blogs";

function Index() {
    return (
        <>
            <SiteSlider />
            {/* Start ypur Business */}
            <section className="health-guide">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 section-wrapper text-center">
                            <h3 className="section-title">Start Your Own Business</h3>
                            <p>Welcome to Binasta's revolutionary affiliate program, designed to empower independent business owners like you! Our program offers a unique opportunity to earn Bina Points based on your sales volumes. Join our affiliate program today and unlock a world of benefits, growth, and success.</p>
                        </div>
                    </div>
                    <div className="row grid">

                        <div className="col-lg-4 col-md-6 text-center grid-item animation" data-animation="fadeInLeft" data-animation-delay="0.1s">
                            <div className="single-health-block  d-flex flex-column align-items-center justify-content-center">
                                <div className="icon-box">
                                    <i className="icofont icofont-handshake-deal"></i>
                                </div>
                                <h4>Lucrative Commission Structure</h4>
                                <p>Binasta's affiliate program offers an incredibly generous commission structure that rewards your efforts. As an independent business owner, you will earn Bina Points for every sale you generate. The more you sell, the more points you accumulate, leading to increased earnings and potential bonuses.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center grid-item animation" data-animation="fadeInLeft" data-animation-delay="0.1s">
                            <div className="single-health-block  d-flex flex-column align-items-center justify-content-center">
                                <div className="icon-box">
                                    <i className="icofont icofont-handshake-deal"></i>
                                </div>
                                <h4>Valuable Bina Points</h4>
                                <p>Bina Points are more than just a reward system; they hold tangible value within the Binasta ecosystem. Accumulated Bina Points can be redeemed for a variety of benefits, including discounts on Binasta products, exclusive access to training programs, priority customer support, and even exciting travel incentives. Your Bina Points can be a gateway to a world of opportunities.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center grid-item  animation" data-animation="fadeInRight" data-animation-delay="0.3s">
                            <div className="single-health-block  d-flex flex-column align-items-center justify-content-center">
                                <div className="icon-box">
                                    <i className="icofont icofont-live-support"></i>
                                </div>
                                <h4>Comprehensive Training and Support</h4>
                                <p>We understand that your success is our success. That's why we provide comprehensive training and support to all our affiliates. Our dedicated team will equip you with the knowledge and tools you need to excel in promoting Binasta products and generating sales. From product training to marketing strategies, we've got you covered.</p>
                            </div>
                        </div>
                        <Blogs />
                    </div>
                </div>
            </section>

            <QueryForm />
            <Products />

            {/* Call to action */}
            <section className="call-to-action">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7 text-center text-md-left">
                            <h3>Swizenta Ashwagandha Candy, the delicious way to enhance your health and vitality!</h3>
                            <p>Packed with the power of nature's finest herb, ashwagandha, our candy offers a tantalizing blend of taste and benefits that will leave you craving for more.</p>
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