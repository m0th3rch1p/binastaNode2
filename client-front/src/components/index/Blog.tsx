import { useFetchProductsQuery } from "@/store/reducers/productsSlice"

function Blog() {
  const { data: products } = useFetchProductsQuery();

  return (
    <section className="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 section-wrapper text-center">
            <h3 className="section-title">Some Of Our Products</h3>
            <p>
              Lorem ipsum dolor sit amet,sed diam voluptua. sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              consetetur sadipscing elitr, Stet clita kasd gubergren
            </p>
          </div>
        </div>
        <div className="row grid">
          {
            products?.map(product => (
              <div className="col-md-6 grid-item animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                <div className="single-blog">
                  <div className="blog-thumb">
                    <img className="" src="https://binasta.co.ke/storage/blogs/2GdTmcu4Tl5g3OxMi2FoIHW7DKOm56WpqLw4lysn.jpg" data-src="/storage/blogs/2GdTmcu4Tl5g3OxMi2FoIHW7DKOm56WpqLw4lysn.jpg" alt="" />
                  </div>
                  <div className="blog-text">
                    <ul className="post-meta d-flex justify-content-between">
                      <li>
                        <a href="#">
                          <i className="icofont">ui_calendar</i>Sat Jan 21 2023
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont">user_alt_4</i> Tonmoy Khan
                        </a>
                      </li>
                    </ul>
                    <h4>
                      <a href="/blog/live-a-healthy-life">Live A Healthy Life</a>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has su [...]
                    </p>
                    <a className="blog-link" href="/blog/live-a-healthy-life">
                      Reads More
                    </a>
                  </div>
                </div>
              </div>
            ))
          }

          <div className="col-md-6 grid-item animation" data-animation="fadeInUp" data-animation-delay="0.1s">
            <div className="single-blog">
              <div className="blog-thumb">
                <img className="" src="https://binasta.co.ke/storage/blogs/EY0f8lMmV1mwpu6dAHdlXREEVJxbvcPxiHhqnN4m.jpg" data-src="/storage/blogs/EY0f8lMmV1mwpu6dAHdlXREEVJxbvcPxiHhqnN4m.jpg" alt="" />
              </div>
              <div className="blog-text">
                <ul className="post-meta d-flex justify-content-between">
                  <li>
                    <a href="#">
                      <i className="icofont">ui_calendar</i>Sat Jan 21 2023
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont">user_alt_4</i> Tonmoy Khan
                    </a>
                  </li>
                </ul>
                <h4>
                  <a href="/blog/simple-morning-workouts">Simple Morning Workouts</a>
                </h4>
                <p>
                  orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has sur [...]
                </p>
                <a className="blog-link" href="/blog/simple-morning-workouts">
                  Reads More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Blog