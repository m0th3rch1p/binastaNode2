import React from 'react'
import { Link } from 'react-router-dom';

function SiteSlider() {
  const bgShader = {
    background: 'rgba(255,255,255,0.75)',
    paddingTop: '10px',
    paddingLeft: '10px',
    paddingBottom: '10px',
    paddingRight: '10px'
};
  return (
    <section className="site-slider bg-1">
    <div className="single-slide">
            {/* <div className="container"> */}
                <div className="row bn_height align-items-center">
                    <div className="col-lg-7">
                        <div className="slide-content" style={bgShader}>
                            <h1> Binasta Company Affiliate Program<span>Empowering Independent Business Owners</span></h1>
                                                       <Link to="/contact" className="btn-mr th-gradient2 pill">Contact Us</Link>
                                                       <Link to="/how-it-works" className="btn-mr th-gradient pill">Read more</Link>

                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
</section>

  )
}

export default SiteSlider