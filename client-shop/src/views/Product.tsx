import React, { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { ProductVariation } from "@/types/ProductVariation.type";
import { Link, useParams } from "react-router-dom";
import { Cart, CartProduct } from "@/store/reducers/cartSlice";
import { addCart, changeQuantity, changeSelectedVariation } from "@/store/reducers/cartSlice";
import Loader from "@/components/common/Loader";
import { useFetchSingleProductQuery } from "@/store/reducers/productsSlice";

function Product() {
    const cart: Cart = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const params = useParams();
    
    const itemInCart: CartProduct | undefined = cart.products.find(({ product }) => {
        return product.slug === params.slug;
    });

    const { data: product, isLoading, isSuccess } = useFetchSingleProductQuery({ slug: params.slug as string });
    const [selected, setSelected] = useState<{ variation: ProductVariation | undefined, quantity: number, inCart: boolean }>({
        variation: itemInCart?.selectedVariation,
        quantity: itemInCart ? itemInCart.quantity : 1,
        inCart: itemInCart ? true : false
    });

    useEffect(() => {
        if (!itemInCart) {
            setSelected((state) => ({
                ...state,
                variation: product?.variations?.[0]
            }));
        } else {
            setSelected((state) => ({
                ...state,
                variation: itemInCart.selectedVariation,
                quantity: itemInCart.quantity,
                inCart: true
            }))
        }
    }, [product, itemInCart])

    const onHandleQtyDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (selected.quantity <= 1) return false;

        if (selected.inCart) {
            dispatch(changeQuantity({ product_id: product?.id, quantity: --selected.quantity }));
            return;
        } else {
            setSelected((state) => (
                {
                    ...state,
                    quantity: state.quantity--
                }
            ));
        }
    }

    const onHandleQtyUp = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (selected.inCart) {
            dispatch(changeQuantity({ product_id: product?.id, quantity: ++selected.quantity }));
        } else {
            setSelected((state) => (
                {
                    ...state,
                    quantity: state.quantity++
                }
            ));
        }
    }

    const onSelectVariation = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    };
    return (
        <div className="container mb-30">
            <div className="row">
                <div className="col-xl-10 col-lg-12 m-auto">
                    <div className="product-detail accordion-detail">
                        {
                            !isLoading && product ? (
                                <>
                                    <div className="row mb-50 mt-30">
                                        <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                            <div className="detail-gallery">
                                                <span className="zoom-icon"><i className="fi-rs-search"></i></span>
                                                <div className="product-image-slider">
                                                    <img src={`/${product?.images?.[0].url}`} alt={product?.name} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                            <div className="detail-info pr-30 pl-30">
                                                <span className="stock-status out-stock"> Sale Off </span>
                                                <h2 className="title-detail">{product?.name}</h2>
                                                <div className="product-detail-rating">
                                                    <div className="product-rate-cover text-end">
                                                        <div className="product-rate d-inline-block">
                                                            <div className="product-rating" style={{
                                                                width: "90%"
                                                            }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="clearfix product-price-cover">
                                                    <div className="product-price primary-color float-left">
                                                        <span className="current-price text-brand">ksh.{selected.variation ? selected.variation.buy_price * selected.quantity : ((product?.variations?.[0].buy_price) as number) * selected.quantity}</span>
                                                        {/* <span>
                                                <span className="save-price font-md color3 ml-15">26% Off</span>
                                                <span className="old-price font-md ml-15">$52</span>
                                            </span> */}
                                                    </div>
                                                </div>
                                                <div className="short-desc mb-30">
                                                    <p className="font-lg">{product?.description}</p>
                                                </div>
                                                <div className="attr-detail attr-size mb-30">
                                                    <strong className="mr-10">Size / Weight: </strong>
                                                    <ul className="list-filter size-filter font-small">
                                                        {
                                                            product?.variations?.map((variation: ProductVariation) => (
                                                                <li key={variation.id} className={
                                                                    itemInCart ? ((variation.id === itemInCart.selectedVariation.id) ? 'active' : '')
                                                                        : (product.variations?.[0].id === variation.id ? 'active' : '')}>
                                                                    <a onClick={onSelectVariation} href="#0" data-id={variation.id}>{variation.variation}</a>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="detail-extralink mb-50">
                                                    <div className="detail-qty border radius">
                                                        <a onClick={onHandleQtyDown} href="#0" className="qty-down"><i className="fi-rs-angle-small-down"></i></a>
                                                        <span className="qty-val">{selected.quantity}</span>
                                                        <a onClick={onHandleQtyUp} href="#0" className="qty-up"><i className="fi-rs-angle-small-up"></i></a>
                                                    </div>
                                                    <div className="product-extra-link2">
                                                        <button onClick={onAddCart} className="button button-add-to-cart"><i className="fi-rs-shopping-cart"></i>{selected.inCart ? 'In Cart' : 'Add to cart'}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-60">
                                        <div className="col-12">
                                            <h2 className="section-title style-1 mb-30">Related products</h2>
                                        </div>
                                        <div className="col-12">
                                            <div className="row related-products">
                                                {
                                                    product?.related?.map(relatedProduct => (
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
                                        </div>
                                    </div>
                                </>
                            ) : <Loader />
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product