import { useFetchBlogsQuery } from "@/store/reducers/blogsSlice"
import { Link } from "react-router-dom";

function Blog() {
  const { data: blogs } = useFetchBlogsQuery();
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
                    <Link className='' to='/'>
                      Home
                    </Link>
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
            {
              blogs?.map((blog) => (
                <div className="col-lg-4 col-md-6 col-12 grid-item">
                  <article className="single-blog sticky">
                    <div className="blog-thumb">
                      <img className="" src={`/${blog.image_path}`} alt="" />
                      <ul className="post-meta d-flex justify-content-between">
                        <li><i className="icofont">ui_calendar</i>{ new Date(blog.created_at as string).toLocaleDateString() }</li>
                      </ul>
                    </div>
                    <div className="blog-text">
                      <h4><Link to={`/blog/${blog.slug}`}>{ blog.title }</Link></h4>
                      <p>
                        { blog.description }<Link to={`/blog/${blog.slug}`}>[...]</Link>
                      </p>
                    </div>
                  </article>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
