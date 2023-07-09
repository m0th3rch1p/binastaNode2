import useStoreMessage from "@/hooks/useStoreMessage";

function QueryForm() {
    const { 
        validations, 
        onHandleChange,
        isLoading,
        isSuccess, 
        isError, 
        onSubmitMessage
    } = useStoreMessage();    
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
                                    <input type="text" name="name" onChange={onHandleChange} className="form-control"  placeholder="Full Name" required/>
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="input-group animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="icofont icofont-email"></i></div>
                                    </div>
                                    <input type="email" name="email" onChange={onHandleChange} className="form-control"  placeholder="Email Address" required/>
                                </div>
                            </div>
                            <div className="form-group col-md-6 animation" data-animation="fadeInUp" data-animation-delay="0.3s">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="icofont icofont-iphone"></i></div>
                                    </div>
                                    <input type="text" name="phone_number" onChange={onHandleChange} className="form-control"  placeholder="Phone Number" required/>
                                </div>
                            </div>
                            <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.5s">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="icofont icofont-ui-messaging"></i></div>
                                    </div>
                                    <textarea name="message"  onChange={onHandleChange} className="form-control" placeholder="Message" required></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="submit" onClick={onSubmitMessage} className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">{ isLoading ? "Submitting..." : "Submit Now" }</button>
                        <div className="appoinmentshpae-2">
                            <div className="innershape"></div>
                        </div>
                        {
                            isSuccess ? (
                                <div className="row">
                                    <div className="col-12">
                                        <div className="badge badge-success" style={{
                                            padding: "20px",
                                            marginTop: "10px"
                                        }}>Thank you for writing to us. We will get back to you in 24hrs</div>
                                    </div>
                                </div>
                           ) : <></>
                        }
                    </form>
            </div>
        </div>
    </div>
    <div className="videobgplay bg_1"></div>
</section>

  )
}

export default QueryForm;