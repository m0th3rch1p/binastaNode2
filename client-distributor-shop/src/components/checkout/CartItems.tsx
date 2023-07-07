import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { Cart } from "@/store/reducers/cartSlice";
import { Link } from "react-router-dom";

function CartItems() {
    const cart = useAppSelector((state) => state.cart as Cart);
    return (
        <>
            <table className="table no-border">
                <tbody>
                    {
                        cart.products?.map(({ product, selectedVariation, quantity }) => (
                            <tr key={ product.slug }>
                                <td className="image product-thumbnail"><img src={ product?.images?.[0].url } alt="#" /></td>
                                <td>
                                    <h6 className="w-160 mb-5"><Link to={ `/products/${product.slug}` } className="text-heading">{ product.name }</Link></h6>
                                    <div className="product-rate-cover">
                                        <div className="product-rate d-inline-block">
                                            <div className="product-rating" style={{
                                                width: "90%"
                                            }}>
                                            </div>
                                        </div>
                                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                                    </div>
                                </td>
                                <td>
                                    <h6 className="text-muted pl-20 pr-20">x { quantity }</h6>
                                </td>
                                <td>
                                    <h4 className="text-brand">ksh.{ selectedVariation.buy_price }</h4>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default CartItems