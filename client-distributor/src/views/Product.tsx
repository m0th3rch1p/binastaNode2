import { useFetchSingleProductQuery } from "@/store/reducers/productsSlice"
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useState, useEffect } from "react";
import { Cart, CartProduct, addCart, changeSelectedVariation } from "@/store/reducers/cartSlice";
import { ProductVariation } from "@/types/ProductVariation.type";

function Product() {
    const params = useParams();
    const { data: product, isLoading, isError } = useFetchSingleProductQuery({slug: params.slug as string});
    
    const cart: Cart = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    const itemInCart: CartProduct | undefined = cart.products.find(({ product }) => {
        return product.slug === params.slug;
    });

    const [selected, setSelected] = useState<{ variation: ProductVariation | undefined, quantity: number, inCart: boolean }>({
        variation: undefined,
        quantity: 1,
        inCart: itemInCart ? true : false
    });

    useEffect(() => {
        if (itemInCart) {
            setSelected((state) => ({
                ...state,
                quantity: itemInCart.quantity,
                variation: itemInCart.selectedVariation
            }))
        } else if (product !== undefined && !itemInCart) {
            console.log(product);
            setSelected((state) => ({
                ...state,
                quantity: 1,
                variation: product.variations?.[0]
            }))
        }
    }, [itemInCart, product])

    const onChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (parseInt(e.target.value) <= 1) return;

        setSelected((state) => ({
            ...state,
            quantity: parseInt(e.target.value)
        }));
    }

    const onAddCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (selected.inCart) return false;
        dispatch(addCart({
            product,
            selectedVariation: selected.variation,
            quantity: selected.quantity
        }));

        setSelected((state) => ({ 
            ...state,
            inCart: true
        }));   
    }

    const onSelectVariation = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const selectedId = parseInt(e.currentTarget.getAttribute("data-id") as string);
        const selectedVariation = product?.variations?.find((variation) => variation.id === selectedId);
        setSelected((state) => ({
            ...state,
            selectedVariation
        }));

        if (selected.inCart) {
            dispatch(changeSelectedVariation({ product_id: product?.id, selectedVariation }))
        }
    };

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card mb-4">
                    <div className="card-body">
                    {
                        !isLoading && product && selected.variation ? (
                            <div className="row">
                            <div className="col-md-5">
                                <img src={ `/${product.images?.[0].url}` } className="w-100 rounded" alt={product?.name} />
                            </div>
                            <div className="col-md-7">
                                <div className="d-flex justify-content-between align-items-start mt-4 mt-md-0">
                                    <div>
                                        <div className="small text-muted mb-2">{ product?.category_name }</div>
                                        <h2>{ product?.name }</h2>
                                        <p>
                                            <span className="badge bg-success">In stock</span>
                                        </p>
                                        <p>{ product?.description }</p>
                                        <div className="d-flex gap-3 mb-3 align-items-center">
                                            <h4 className="mb-0">ksh.{selected.variation.buy_price * selected.quantity}</h4>
                                        </div>
                                        <div className="d-flex gap-3 mb-3 align-items-center">
                                            <strong className="mr-10">Size / Weight: </strong>
                                            <div className="d-grid gap-2 d-md-block">
                                            {
                                                product?.variations?.map((variation) => (
                                                    <button onClick={onSelectVariation}  data-id={variation.id} key={variation.id} className={`btn btn-sm btn-outline-primary mr-2 ${
                                                        itemInCart ? ((variation.id === itemInCart.selectedVariation.id) ? 'active' : '')
                                                            : (product.variations?.[0].id === variation.id ? 'active' : '')}`} type="button">{ variation.variation }</button>
                                                ))
                                            }          
                                            </div>
                                            
                                            {/* <h4 className="mb-0">ksh.{ product?.variations }</h4> */}
                                        </div>
                                        <div className="d-flex gap-2 mb-3">
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-warning"></i>
                                            <i className="bi bi-star-fill text-muted"></i>
                                            <span>(3)</span>
                                        </div>
                                        <form className="mt-4">
                                            <div className="row row-cols-lg-auto">
                                                <div className="col-12">
                                                    <div className="input-group">
                                                        <input min="1" type="number" onChange={onChangeQuantity} className="form-control" value={selected.quantity} />
                                                        <button className="btn btn-primary" onClick={onAddCart} type="button">{selected.inCart ? 'In Cart' : 'Add to cart'}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ) : (<></>)
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product