import useStoreMessage from "@/hooks/useStoreMessage";

function Contact() {
  const { 
    validations, 
    onHandleChange,
    isLoading,
    isSuccess, 
    isError, 
    onSubmitMessage
} = useStoreMessage();
  return (
    <>
      <section className='page-banner'>
        <div className='container'>
          <div className='row align-items-center justify-content-center page-bn-height'>
            <div className='col-12 text-center'>
              <h3>Contact Us</h3>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb site-breadcumb-1 justify-content-center'>
                  <li className='breadcrumb-item'>
                    <a className='' href='/'>
                      Home
                    </a>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    Contact Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className='page-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='single-contact-innfo d-flex flex-column justify-content-center align-items-center'>
                <div className='boxicon mr-3'>
                  <i className='icofont icofont-pin'></i>
                </div>
                <h3>Our Location</h3>
                <p>A26BT5 Building, SilverC Street, London England</p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-contact-innfo d-flex flex-column justify-content-center align-items-center'>
                <div className='boxicon mr-3'>
                  <i className='icofont icofont-telephone'></i>
                </div>
                <h3>Call Us Now</h3>
                <p>
                  +123 65487954 <br /> +123 98765426
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-contact-innfo d-flex flex-column justify-content-center align-items-center'>
                <div className='boxicon mr-3'>
                  <i className='icofont icofont-email'></i>
                </div>
                <h3>Write Us Now</h3>
                <p>
                  <a href='mailto:inforations@.com'>
                    inforations@.com Supportrations@.com
                  </a>{' '}
                  <br />
                  <a href='mailto:inforations@.com'>
                    inforations@.com Supportrations@.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className='spacer-extra2'></div>
          <div className='row'>
            <div className='col-lg-6'>
              <form className='site-contactform'>
                <h3 className='section-title xs2'>Contact Us</h3>
                <div className='form-row'>
                  <div className='col-12'>
                    <input
                      name="name"
                      onChange={onHandleChange}
                      type='text'
                      className='form-control'
                      placeholder='Type Your Name'
                      required
                    />
                  </div>
                  <div className='col-12'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email'
                      name="email"
                      onChange={onHandleChange}
                    />
                  </div>
                  <div className='col-12'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Phone Number'
                      name="phone_number"
                      onChange={onHandleChange}
                    />
                  </div>
                  <div className='col-12'>
                    <textarea
                      className='form-control'
                      placeholder='write your message'
                      name="message"
                      onChange={onHandleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  id='submitBtn'
                  type='submit'
                  className='btn-mr th-primary pill'
                  onClick={onSubmitMessage}
                >
                  {isLoading ? "SENDING...." : "SEND"} 
                </button>
              </form>
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
            </div>
            <div className='col-lg-6'>
              <div className='promo-add'>
                <img
                  className=''
                  src='https://binasta.co.ke/main/images/all-img/conimg.jpg'
                  data-src='/main/images/all-img/conimg.jpg'
                  alt=''
                />
                <div className='promo-text'>
                  <span>Need Help For Any</span>
                  <h4>Health Information </h4>
                  <h3>+123 6547896</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='spacer-extra2'></div>
          <div className='row'>
            <div className='col-12'></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
