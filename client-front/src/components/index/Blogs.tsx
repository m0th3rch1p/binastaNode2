import { useFetchBlogsQuery } from "@/store/reducers/blogsSlice";

function Blogs() {
  const { data: blogs } = useFetchBlogsQuery();

  return (
    <section className="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 section-wrapper text-center">
            <h3 className="section-title">Check Out Our Blog</h3>
            <p>
            From cutting-edge marketing strategies to productivity hacks and customer engagement, our blog covers it all. Get expert insights, practical tips, and innovative ideas tailored specifically for independent business owners like you.
            </p>
          </div>
        </div>
        <div className="row grid">
          {
            blogs?.map(blog => (
              <div className="col-md-4 grid-item animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                <div className="single-blog">
                  <div className="blog-thumb">
                    <img className="" src={`/${blog.image_path}`} alt="" />
                  </div>
                  <div className="blog-text">
                    <h4>
                      <a href={`blogs/${blog.slug}`}>{ blog.title }</a>
                    </h4>
                    <p>
                      { blog.description?.slice(0, 150) }...
                    </p>
                    <a className="blog-link" href={`blogs/${blog.slug}`}>
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>

  )
}

export default Blogs;