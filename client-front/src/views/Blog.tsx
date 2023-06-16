import React from 'react'

function Blog() {
  return (
    <>
      <section className='page-banner'>
        <div className='container'>
          <div className='row align-items-center justify-content-center page-bn-height'>
            <div className='col-12 text-center'>
              <h3>Blog</h3>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb site-breadcumb-1 justify-content-center'>
                  <li className='breadcrumb-item'>
                    <a className='' href='/'>
                      Home
                    </a>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    Blog
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="blog-area page-blog">
        <div className="container">
          <div className="row grid" style={{ position: 'relative', height: '877px' }}>
            <div className="col-lg-4 col-md-6 col-12 grid-item" style={{ position: 'absolute', left: '0%', top: '0px' }}>
              <article className="single-blog sticky">
                <div className="blog-thumb">
                  <img className="" src="https://binasta.co.ke/storage/blogs/2GdTmcu4Tl5g3OxMi2FoIHW7DKOm56WpqLw4lysn.jpg" data-src="/storage/blogs/2GdTmcu4Tl5g3OxMi2FoIHW7DKOm56WpqLw4lysn.jpg" alt="" />
                  <ul className="post-meta d-flex justify-content-between">
                    <li><a href="#"><i className="icofont">ui_calendar</i> Sat Jan 21 2023</a></li>
                  </ul>
                </div>
                <div className="blog-text">
                  <h4><a href="/blog/live-a-healthy-life">Live A Healthy Life</a></h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has su <a href="/blog/live-a-healthy-life">[...]</a>
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6 col-12 grid-item" style={{ position: 'absolute', left: '33.3333%', top: '0px' }}>
              <article className="single-blog audio">
                <iframe width="100%" height="360" scrolling="no" frameBorder="no" allow="autoplay" src="https://www.youtube.com/embed/MilYefF9DjI"></iframe>
                <div className="blog-text">
                  <ul className="post-meta d-flex justify-content-between">
                    <li><a href="#"><i className="icofont">ui_calendar</i> Sat Jan 21 2023</a></li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6 col-12 grid-item" style={{ position: 'absolute', left: '66.6667%', top: '0px' }}>
              <article className="single-blog sticky">
                <div className="blog-thumb">
                  <img className="" src="https://binasta.co.ke/storage/blogs/EY0f8lMmV1mwpu6dAHdlXREEVJxbvcPxiHhqnN4m.jpg" data-src="/storage/blogs/EY0f8lMmV1mwpu6dAHdlXREEVJxbvcPxiHhqnN4m.jpg" alt="" />
                  <ul className="post-meta d-flex justify-content-between">
                    <li><a href="#"><i className="icofont">ui_calendar</i> Sat Jan 21 2023</a></li>
                  </ul>
                </div>
                <div className="blog-text">
                  <h4><a href="/blog/simple-morning-workouts">Simple Morning Workouts</a></h4>
                  <p>
                    orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has sur <a href="/blog/simple-morning-workouts">[...]</a>
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6 col-12 grid-item" style={{ position: 'absolute', left: '33.3333%', top: '457px' }}>
              <article className="single-blog qute">
                <div className="blog-text">
                  <div className="quation">
                    <i className="icofont">quote_right</i>
                  </div>
                  <h4>
                    <p>“Strength does not come from physical capacity. It comes from an indomitable will.”</p>
                    <p>-Mahatma Gandhi</p>
                  </h4>
                  <ul className="post-meta d-flex justify-content-between">
                    <li><a href="#"><i className="icofont">ui_calendar</i> Sat Jan 21 2023</a></li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
