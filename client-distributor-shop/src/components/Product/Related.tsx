import { Product } from '@/store/reducers/productsSlice';
import { Link } from 'react-router-dom';


function Related({ relatedProduct }: { relatedProduct: Product[] }) {
    return (
        <>
            <div className="row related-products">
                {
                    relatedProduct.map(relatedProduct => (
                        <div className="col-lg-3 col-md-4 col-12 col-sm-6" key={relatedProduct.id}>
                            <div className="product-cart-wrap hover-up">
                                <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                        <Link to={`/product/${relatedProduct.slug}`} tabIndex={0}>
                                            <img className="default-img" src={`${relatedProduct.images?.[0].url}`} alt="" />
                                            <img className="hover-img" src={`${relatedProduct.images?.[1].url}`} alt="" />
                                        </Link>
                                    </div>
                                    <div className="product-badges product-badges-position product-badges-mrg">
                                        <span className="hot">Hot</span>
                                    </div>
                                </div>
                                <div className="product-content-wrap">
                                    <h2><Link to={`/product/${relatedProduct.slug}`} tabIndex={0}>{relatedProduct.name}</Link></h2>
                                    <div className="rating-result" title="90%">
                                        <span> </span>
                                    </div>
                                    <div className="product-price">
                                        <span>ksh.{relatedProduct?.variations?.[0].buy_price} </span>
                                        {/* <span className="old-price">$245.8</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Related