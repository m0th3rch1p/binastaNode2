import wayImg from "../assets/way.webp";

function Register() {
    return (
        <div className="section-consultation">
            <div className="section-consultation__bg js-lazy" style={{
                backgroundImage: `url(${wayImg})`
            }}></div>
            <div className="wrapper">
                <div className="consultation-form-wrap">
                    <div className="consultation-form">
                        <div className="section-heading"><span>get started</span></div>
                        <h2 className="h2">get a free consultation</h2>
                        <div className="content-block__text">
                            <p>Dolor duis voluptate enim exercitation consequat ex. Voluptate in sunt commodo aute dolor enim dolor labore velit nul.</p>
                        </div>
                        <div className="consultation-form__form">
                            <form>
                                <div className="box-fileds">
                                    <div className="box-filed">
                                        <input type="text" placeholder="First name" />
                                    </div>
                                    <div className="box-filed">
                                        <input type="text" placeholder="Second name" />
                                    </div>
                                    <div className="box-filed">
                                        <input type="tel" placeholder="Enter your phone" im-insert="true" />
                                    </div>
                                    <div className="box-filed">
                                        <input type="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="box-filed box-filed_btn">
                                        <input type="submit" className="btn" value="Submit" />
                                    </div>
                                    <div className="box-filed box-field__accept">
                                        <label className="checkbox-element">
                                            <input type="checkbox" />
                                            <span className="checkbox-text">I accept the <a href="#0" target="_blank">Terms and Conditions.</a></span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="consultation-img">
                        <img data-src="img/consultation.svg" alt="" className="js-lazy loaded" src="img/consultation.svg" data-was-processed="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register