import mainImg from "./assets/main.jpg";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Register from "./components/Register";
import Testimonials from "./components/Testimonials";

import "./assets/css/first-screen.css";
import "./assets/fonts/AleoBold.woff2";
import "./assets/fonts/Lato/LatoRegular.woff2";
import "./assets/fonts/Lato/LatoBold.woff2";
import "./assets/css/style.css";
function App() {
  return (
    <div className="main-wrapper">
            <main className="content">
                <div className="first-screen section-screen-main">
                    <div className="section-screen-main__bg" style={{
                        backgroundImage: mainImg
                    }}></div>
                    <div className="wrapper">
                        <div className="screen-main">
                            <div className="section-heading"><span>Be sure</span></div>
                            <h1 className="h1 h1-main">your success is in&nbsp;our&nbsp;hands</h1>
                            <div className="screen-main__text">Agency with 12&nbsp;years of history, 15&nbsp;employees, Fortune 5000&nbsp;clients and proven results.</div>
                            <a href="#0" className="btn btn_learn">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="section-services-main" id="services">
                    <div className="wrapper">
                        <div className="services">
                            <div className="services__item">
                                <div className="services__decor"></div>
                                <div className="services__icon">
                                    <img src="img/icons-svg/exellence-1.svg" alt="" loading="lazy" />
                                </div>
                                <div className="services__title">SEO Consultancy</div>
                                <div className="services__text">Dolor enim dolor labore velit nulla sit exercitation proident esse culpa commodo n irure esse velit commodo.</div>
                            </div>
                            <div className="services__item">
                                <div className="services__decor"></div>
                                <div className="services__icon">
                                    <img src="img/icons-svg/exellence-2.svg" alt="" loading="lazy" />
                                </div>
                                <div className="services__title">Site Optimization</div>
                                <div className="services__text">Voluptate in sunt commodo aute do. Dolor enim dolor labore velit nulla sit exetion irure esse proid.</div>
                            </div>
                            <div className="services__item">
                                <div className="services__decor"></div>
                                <div className="services__icon">
                                    <img src="img/icons-svg/exellence-3.svg" alt="" loading="lazy" />
                                </div>
                                <div className="services__title">Page Rankings</div>
                                <div className="services__text">Dolor enim dolor labore velit nulla sit exercitation proident esse culpa commodo n irure esse velit commodo.</div>
                            </div>
                            <div className="services__item">
                                <div className="services__decor"></div>
                                <div className="services__icon">
                                    <img src="img/icons-svg/exellence-4.svg" alt="" loading="lazy" />
                                </div>
                                <div className="services__title">User Retention</div>
                                <div className="services__text">Voluptate in sunt commodo aute do. Dolor enim dolor labore velit nulla sit exetion irure esse proid.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-about" id="about">
                    <div className="wrapper">
                        <div className="about">
                            <div className="about__img">
                                <div className="about__picture">
                                    <img data-src="img/way.svg" alt="" className="js-lazy loaded" src="img/way.svg" data-was-processed="true" />
                                </div>
                            </div>
                            <div className="about__content">
                                <div className="section-heading"><span>the history</span></div>
                                <div className="h2">Our way to succesful future</div>
                                <div className="section-subtitle">Sint nulla commodo qui magna eiusmod quis aliqua laboris officia excepteur non eu in.</div>
                                <div className="content-block__text">
                                    <p>Dolor duis voluptate enim exercitation consequat ex. Voluptate in sunt commodo aute do. Dolor enim dolor labore velit nulla sit exercitation irure esse proident velit commodo. Est non officia proident esse culpa commodo nulla Lorem do enderit esse do.</p>
                                </div>
                                <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="about__btn play-video js-fancybox">
                                    <span className="play-icon">
                                    <i className="icon-play"></i>
                                    </span>
                                    <div className="play-video__text">
                                        <div className="play-video__title">about us</div>
                                        <div className="play-video__link">Watch our process!</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="about-details">
                            <div className="about-details__item">
                                <div className="about-details__val">$ 35k<span className="about-details__val_plus">+</span></div>
                                <div className="about-details__text">Clients revenue</div>
                                <div className="about-details__decor"></div>
                            </div>
                            <div className="about-details__item">
                                <div className="about-details__val">16k<span className="about-details__val_plus">+</span></div>
                                <div className="about-details__text">Leads for clients</div>
                                <div className="about-details__decor"></div>
                            </div>
                            <div className="about-details__item">
                                <div className="about-details__val">6.7k<span className="about-details__val_plus">+</span></div>
                                <div className="about-details__text">Phone calls</div>
                                <div className="about-details__decor"></div>
                            </div>
                            <div className="about-details__item">
                                <div className="about-details__val">254<span className="about-details__val_plus">+</span></div>
                                <div className="about-details__text">Successful projects</div>
                                <div className="about-details__decor"></div>
                            </div>
                        </div>
                    </div>
                    <div className="about-decor about-decor_1"></div>
                    <div className="about-decor about-decor_2"></div>
                    <div className="about-decor about-decor_3"></div>
                </div>
                <div className="section-get">
                    <div className="wrapper">
                        <div className="section-heading h-center"><span>what we do</span></div>
                        <div className="h-decor-1">
                            <h2 className="h2 h-center"><span>what you will get with us</span></h2>
                            <div className="section-subtitle h-center">Dolor duis voluptate enim exercitation consequat ex. </div>
                        </div>
                        <div className="get-list">
                            <div className="get-list__item">
                                <div className="get-list__heading">
                                    <div className="get-list__icon">
                                        <img src="img/icons-svg/get-1.svg" alt="" loading="lazy" />
                                    </div>
                                    <div className="get-list__title">Research &amp; analysis</div>
                                </div>
                                <div className="get-list__text">Dolor duis voluptate enim exercitation consequat ex. Voluptate in sunt commodo aute do. Dolor enim dolor labore velit nulla sit exercitation irure esse proid.</div>
                            </div>
                            <div className="get-list__item">
                                <div className="get-list__heading">
                                    <div className="get-list__icon">
                                        <img src="img/icons-svg/get-2.svg" alt="" loading="lazy" />
                                    </div>
                                    <div className="get-list__title">Unique content</div>
                                </div>
                                <div className="get-list__text">Voluptate in sim dolor labore velit nuunt commodo aute do. Dolor enim dolor labore im dolor labore velit te dolor enim dolor labore velit nul.</div>
                            </div>
                            <div className="get-list__item">
                                <div className="get-list__heading">
                                    <div className="get-list__icon">
                                        <img src="img/icons-svg/get-3.svg" alt="" loading="lazy" />
                                    </div>
                                    <div className="get-list__title">Thematic links</div>
                                </div>
                                <div className="get-list__text">Pariatur magna cupidatat magna sit incididunt non pariatur. Sint nulla commodo qui magna eiusmod quis aliqua laboris officia excepteur non eu in.</div>
                            </div>
                            <div className="get-list__item">
                                <div className="get-list__heading">
                                    <div className="get-list__icon">
                                        <img src="img/icons-svg/get-4.svg" alt="" loading="lazy" />
                                    </div>
                                    <div className="get-list__title">Effective UX/UI design</div>
                                </div>
                                <div className="get-list__text">Pariatur magna cupidatat magna sit incididunt non pariatur. Sint nulla commodo qui magna eiusmod quis aliqua laboris officia excepteur non eu in.</div>
                            </div>
                            <div className="get-list__item">
                                <div className="get-list__heading">
                                    <div className="get-list__icon">
                                        <img src="img/icons-svg/get-5.svg" alt="" loading="lazy" />
                                    </div>
                                    <div className="get-list__title">Responsive &amp; high speed</div>
                                </div>
                                <div className="get-list__text">Dolor duis voluptate enim exercitation consequat ex. Voluptate in sunt commodo aute do. Dolor enim dolor labore velit nulla sit exercitation irure esse proid.</div>
                            </div>
                            <div className="get-list__item">
                                <div className="get-list__heading">
                                    <div className="get-list__icon">
                                        <img src="img/icons-svg/get-6.svg" alt="" loading="lazy" />
                                    </div>
                                    <div className="get-list__title">Quality &amp; valid code</div>
                                </div>
                                <div className="get-list__text">Voluptate in sim dolor labore velit nuunt commodo aute do. Dolor enim dolor labore im dolor labore velit te dolor enim dolor labore velit nul.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Register />
                <div className="section-logos">
                    <div className="wrapper">
                        <div className="logos">
                            <a href="#" target="_blank" className="logos__item">
                            <img data-src="img/examples/logo-1.svg" alt="" className="js-lazy loaded" src="img/examples/logo-1.svg" data-was-processed="true" />
                            </a>
                            <a href="#" target="_blank" className="logos__item">
                            <img data-src="img/examples/logo-2.svg" alt="" className="js-lazy loaded" src="img/examples/logo-2.svg" data-was-processed="true" />
                            </a>
                            <a href="#" target="_blank" className="logos__item">
                            <img data-src="img/examples/logo-3.svg" alt="" className="js-lazy loaded" src="img/examples/logo-3.svg" data-was-processed="true" />
                            </a>
                            <a href="#" target="_blank" className="logos__item">
                            <img data-src="img/examples/logo-4.svg" alt="" className="js-lazy loaded" src="img/examples/logo-4.svg" data-was-processed="true" />
                            </a>
                            <a href="#" target="_blank" className="logos__item">
                            <img data-src="img/examples/logo-5.svg" alt="" className="js-lazy loaded" src="img/examples/logo-5.svg" data-was-processed="true" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="section-steps" id="steps">
                    <div className="wrapper">
                        <div className="section-heading h-center"><span>steps</span></div>
                        <div className="h-decor-3">
                            <h2 className="h2 h-center"><span>main milestones</span></h2>
                        </div>
                        <div className="steps">
                            <div className="steps__item">
                                <span className="steps__count">01</span>
                                <div className="steps__icon">
                                    <img data-src="img/icons-svg/step-1.svg" alt="" loading="lazy" className="js-lazy loaded" src="img/icons-svg/step-1.svg" data-was-processed="true" />
                                </div>
                                <div className="steps__title">Planning</div>
                            </div>
                            <div className="steps__item">
                                <span className="steps__count">02</span>
                                <div className="steps__icon">
                                    <img data-src="img/icons-svg/step-2.svg" alt="" loading="lazy" className="js-lazy loaded" src="img/icons-svg/step-2.svg" data-was-processed="true" />
                                </div>
                                <div className="steps__title">Research</div>
                            </div>
                            <div className="steps__item">
                                <span className="steps__count">03</span>
                                <div className="steps__icon">
                                    <img data-src="img/icons-svg/step-3.svg" alt="" loading="lazy" className="js-lazy loaded" src="img/icons-svg/step-3.svg" data-was-processed="true" />
                                </div>
                                <div className="steps__title">Optimization</div>
                            </div>
                            <div className="steps__item">
                                <span className="steps__count">04</span>
                                <div className="steps__icon">
                                    <img data-src="img/icons-svg/step-4.svg" alt="" loading="lazy" className="js-lazy loaded" src="img/icons-svg/step-4.svg" data-was-processed="true" />
                                </div>
                                <div className="steps__title">Results</div>
                            </div>
                        </div>
                        <div className="steps-text">Pariatur magna cupidatat magna sit incididunt non pariatur. Sint nulla commodo qui magna eiusmod quis aliqua laboris officia excepteur non eu in. Consequat esse in dolore laborum dolore ut duis elit deserunt minim.</div>
                    </div>
                </div>
                <Testimonials />
                <Blogs />
            </main>
            <Header />
            <Footer />
        </div>
  );
}

export default App;
