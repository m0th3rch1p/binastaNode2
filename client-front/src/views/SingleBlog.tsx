import { useFetchBlogBySlugQuery } from "@/store/reducers/blogsSlice"
import { useParams } from "react-router-dom";

function SingleBlog () {
  const { slug } = useParams();
  const { data: blog } = useFetchBlogBySlugQuery(slug as string);
  return (
    <div className='page-content minus-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <article className='single-blog-detials'>
              <img src={`/${blog?.image_path}`} alt='' />
              <ul className='post-meta  d-flex justify-content-between'>
                <li>
                  <a href='#0'>
                    <i className='icofont'>ui_calendar</i> { new Date(blog?.created_at as string).toLocaleDateString() }
                  </a>
                </li>
              </ul>
              <h2>{ blog?.title }</h2>
              
              <div dangerouslySetInnerHTML={{ __html: blog?.post as string }}></div>
            </article>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog
