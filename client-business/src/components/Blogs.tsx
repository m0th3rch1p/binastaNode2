function Blogs() {
    return (
        <div className="section-main-blog" id="blog">
            <div className="wrapper">
                <div className="section-heading h-center"><span>news</span></div>
                <h2 className="h2 h-center">read our blog</h2>
                <div className="section-subtitle h-center">Dolor duis voluptate enim exercitation consequat ex. </div>
                <div className="blog-more">
                    <a href="blog.html" className="btn">view all</a>
                </div>
                <div className="news">
                    <div className="news__item">
                        <a href="article.html" className="news__img">
                            <img data-src="img/examples/news_1.jpg" alt="" className="js-lazy loaded" src="img/examples/news_1.jpg" data-was-processed="true" />
                        </a>
                        <div className="news__content">
                            <div className="news-header">
                                <div className="news__date">Jun 25, 2021</div>
                                <div className="news__author">
                                    <img data-src="img/examples/avatar_2.jpg" alt="" className="js-lazy loaded" src="img/examples/avatar_2.jpg" data-was-processed="true" />
                                    <span className="news__author-title">Annette Black</span>
                                </div>
                                <a href="blog.html" className="news__category">Community</a>
                            </div>
                            <div className="news__title"><a href="article.html">Dolor duis voluptate enim exercitation consequat ex. Voluptate in sunt </a></div>
                        </div>
                    </div>
                    <div className="news__item">
                        <a href="article.html" className="news__img">
                            <img data-src="img/examples/news_2.jpg" alt="" className="js-lazy loaded" src="img/examples/news_2.jpg" data-was-processed="true" />
                        </a>
                        <div className="news__content">
                            <div className="news-header">
                                <div className="news__date">Jun 25, 2021</div>
                                <div className="news__author">
                                    <img data-src="img/examples/avatar_3.jpg" alt="" className="js-lazy loaded" src="img/examples/avatar_3.jpg" data-was-processed="true" />
                                    <span className="news__author-title">Dianne Russell</span>
                                </div>
                                <a href="blog.html" className="news__category">Community</a>
                            </div>
                            <div className="news__title"><a href="article.html">Dolor duis voluptate enim exercitation consequat ex. Voluptate in sunt </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs