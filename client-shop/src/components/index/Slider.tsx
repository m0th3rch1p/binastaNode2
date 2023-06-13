import SlickSlider from 'react-slick'

function Slider() {
    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: true,
        autoplay: true
    };
    return (
        <section className='home-slider position-relative mb-30'>
            <div className='container'>
                <div className='home-slide-cover mt-30'>
                    <div className='hero-slider-1 style-4 dot-style-1 dot-style-1-position-1'>
                        <SlickSlider { ...sliderSettings }>
                            <div
                                className='single-hero-slider single-animation-wrap slider-1'
                            >
                                <div className='slider-content'>
                                    <h1 className='display-2 mb-40'>
                                        Don’t miss amazing
                                        <br />
                                        grocery deals
                                    </h1>
                                    <p className='mb-65'>Sign up for the daily newsletter</p>
                                    <form className='form-subcriber d-flex'>
                                        <input type='email' placeholder='Your emaill address' />
                                        <button className='btn' type='submit'>
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div
                                className='single-hero-slider single-animation-wrap slider-2'
                            >
                                <div className='slider-content'>
                                    <h1 className='display-2 mb-40'>
                                        Fresh Vegetables
                                        <br />
                                        Big discount
                                    </h1>
                                    <p className='mb-65'>
                                        Save up to 50% off on your first order
                                    </p>
                                    <form className='form-subcriber d-flex'>
                                        <input type='email' placeholder='Your emaill address' />
                                        <button className='btn' type='submit'>
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </SlickSlider>
                    </div>
                    <div className='slider-arrow hero-slider-1-arrow'></div>
                </div>
            </div>
        </section>
    )
}

export default Slider
