function QueryForm() {
  return (
    <section className="appoinment-area">
    <div className="container-fluid custom2">
        <div className="row">
            <div className="col-lg-7 offset-lg-5  appoinment-box col-md-12">
                    <div className="section-wrapper animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                        <h3 className="section-title">Any Questions??</h3>
                        <p>Message / Queries will be replied to your email in 24hrs</p>
                    </div>
                <div className="appoinmentshpae-1">
                    <div className="innershape"></div>
                </div>
                    <form  className="frmdesign-1">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <div className="input-group animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="icofont iconfont-ui-user"></i></div>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Full Name" />
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="input-group animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="icofont icofont-email"></i></div>
                                    </div>
                                    <input type="tel" className="form-control"  placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="form-group col-md-6 animation" data-animation="fadeInUp" data-animation-delay="0.3s">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="icofont icofont-iphone"></i></div>
                                    </div>
                                    <input type="email" className="form-control"  placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.5s">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="icofont icofont-ui-messaging"></i></div>
                                    </div>
                                    <textarea  className="form-control" placeholder="Message"></textarea>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">Submit Now</button>
                        <div className="appoinmentshpae-2">
                            <div className="innershape"></div>
                        </div>
                    </form>
            </div>
        </div>
    </div>
    <div className="videobgplay bg_1"><a href="https://www.youtube.com/watch?v=OKGX7gQnxpc" className="playVideo videoicon"><i className="icofont">play</i></a></div>
</section>

  )
}

export default QueryForm;