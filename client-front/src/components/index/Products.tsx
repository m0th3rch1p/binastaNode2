import { useFetchProductsQuery } from "@/store/reducers/productsSlice"

function Products() {
  const { data: products } = useFetchProductsQuery({per_page: 3, offset: 0});

  return (
    <section className="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 section-wrapper text-center">
            <h3 className="section-title">Check Out Our Products</h3>
            <p>
              Lorem ipsum dolor sit amet,sed diam voluptua. sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              consetetur sadipscing elitr, Stet clita kasd gubergren
            </p>
          </div>
        </div>
        <div className="row grid">
          {
            products?.map(product => (
              <div className="col-md-4 grid-item animation" data-animation="fadeInUp" data-animation-delay="0.1s">
                <div className="single-blog">
                  <div className="blog-thumb">
                    <img className="" src={product.images?.[0].url} alt="" />
                  </div>
                  <div className="blog-text">
                    <h4>
                      <a href={`https://shop.binasta.co.ke/products/${product.slug}`}>{ product.name }</a>
                    </h4>
                    <p>
                      { product.description }
                    </p>
                    <a className="blog-link" href={`https://shop.binasta.co.ke/products/${product.slug}`}>
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

export default Products;