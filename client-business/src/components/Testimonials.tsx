function Testimonials() {
    return (
        <div className="section-testimonials" id="testimonials">
            <div className="wrapper">
                <div className="testimonials">
                    <div className="testimonials__img">
                        <div className="testimonials__picture">
                            <img data-src="img/testimonials.svg" alt="" className="js-lazy loaded" src="img/testimonials.svg" data-was-processed="true" />
                        </div>
                    </div>
                    <div className="testimonials__content">
                        <div className="section-heading"><span>they say</span></div>
                        <div className="h2">Testimonials</div>
                        <div className="swiper-container reviews-slider js-slider-1 swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events">
                            <div className="swiper-wrapper" id="swiper-wrapper-7deaf935da2c6891" aria-live="off" style={{
                                transitionDuration: "400ms"
                            }}>
                                <div className="swiper-slide testimonials-card swiper-slide-visible swiper-slide-active" role="group" aria-label="1 / 2" style={{
                                    width: "456px",
                                    opacity: 1,
                                    transform: "translate3d(0px, 0px, 0px)",
                                    transitionDuration: "400ms"
                                }}>
                                    <div className="testimonials-card__text">
                                        <p>“Dolor duis voluptate enim exercitation consequat ex. Voluptate in sunt commodo aute do. Dolor enim dolor labore velit nulla sit exercitation irure esse proident.”</p>
                                    </div>
                                    <div className="author">
                                        <img className="author__img js-lazy loaded" data-src="img/examples/avatar_1.jpg" src="img/examples/avatar_1.jpg" alt="" data-was-processed="true" />
                                        <div className="author__details">
                                            <div className="author__title">Kathryn Murphy</div>
                                            <div className="author__position">Marketing Coordinator</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide testimonials-card swiper-slide-next" role="group" aria-label="2 / 2" style={{
                                    width: "456px",
                                    opacity: 0,
                                    transform: "translate3d(-456px, 0px, 0px)",
                                    transitionDuration: "400ms"
                                }}>
                                    <div className="testimonials-card__text">
                                        <p>“2 Dolor duis voluptate enim exercitation consequat ex. Voluptate in sunt commodo aute do. Dolor enim dolor labore velit nulla sit exercitation”</p>
                                    </div>
                                    <div className="author">
                                        <img className="author__img js-lazy loaded" data-src="img/examples/avatar_1.jpg" src="img/examples/avatar_1.jpg" alt="" data-was-processed="true" />
                                        <div className="author__details">
                                            <div className="author__title">Kathryn Murp</div>
                                            <div className="author__position">Marketing Coord</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials