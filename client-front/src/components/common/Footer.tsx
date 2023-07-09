import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
<footer className="site-footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-footer">
              <Link className="footer-logo" to="/">
                <img src="logo/flogo.png" alt="" width={140} />
              </Link>
              <h3 className="footer-titil">Binasta Limited</h3>
              <p>
                Binasta is a modern affiliate marketing company that markets and sells nutritional supplements, weight management, personal care products, and health shakes.
              </p>
              <br />
              <address>
                CALL NOW FOR SERVICE! <br />
                <strong>254 4567 89012</strong>
              </address>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-footer">
              <h3 className="footer-titil">Quick Links</h3>
              <ul className="post-link">
                <li><a href="https://shop.binasta.co.ke">Shop</a></li>
                <li><a href="https://business.binasta.co.ke">Become A Distributor</a></li>
                <li><Link to="/terms">Terms &amp; Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-footer">
              <h3 className="footer-titil">NEWS LETTER</h3>
              <form>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder=" enter your email" />
                  <div className="input-group-prepend">
                    <button className="btn" type="button" id="submitBtn">Subscribe!</button>
                  </div>
                </div>
                {/* Add any additional elements */}
              </form>
              <ul className="footer-social">
                <li><a href="#"><i className="icofont">facebook</i></a></li>
                <li><a href="#"><i className="icofont">twitter</i></a></li>
                <li><a href="#"><i className="icofont">google_plus</i></a></li>
                <li><a href="#"><i className="icofont">linkedin</i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-12 text-center">
            <div className="copy-right">
              <p>2023 © Binasta Limited, ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-decoration">
        <div className="fbox-1"></div>
        <div className="fbox-2"></div>
      </div>
    </footer>
  )
}

export default Footer