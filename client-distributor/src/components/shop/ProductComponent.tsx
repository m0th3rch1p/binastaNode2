import { Product } from '@/store/reducers/productsSlice'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Cart, addCart } from "@/store/reducers/cartSlice";

function ProductComponent(props: {products: Product[]}) {
    const cart: Cart = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    return (
        <div className="row g-4">
            {
                props.products.map(product => (
                    <div key={product.id} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card card-hover">
                            <Link to={`/product/${product.slug}`}>
                                <img src={ product.images?.[0].url } className="card-img-top" style={{
                                    maxHeight: "372px"
                                }} alt="..." />
                            </Link>
                            <div className="card-body">
                                <Link to={`/product/${product.slug}`}>
                                    <h5 className="card-title mb-3">{ product.name }</h5>
                                </Link>
                                <div className="d-flex gap-3 mb-3 align-items-center">
                                    <h4 className="mb-0">ksh.{ product.variations?.[0].buy_price }</h4>
                                </div>
                                <h6>No.of Units: { product.variations?.[0].wholesale_min }</h6>
                                <div className="d-flex">
                                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => { 
                                        e.preventDefault();
                                        dispatch(addCart({ product, selectedVariation: product.variations?.[0], quantity: 1 }))
                                    }} className="btn btn-primary">{ cart.products.find((productInCart) => productInCart.product.slug === product.slug) ? 'In Cart' : 'Add to Cart' }</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default ProductComponent;