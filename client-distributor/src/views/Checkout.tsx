import Autocomplete from "react-google-autocomplete";

import { useAppSelector, useAppDispatch } from "@/store/hooks"
import { useStoreAddressMutation } from "@/store/reducers/addressSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { resetCart } from "@/store/reducers/cartSlice";
import { usePlaceOrderMutation } from "@/store/reducers/ordersSlice";

function Checkout() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart);
    
    const [storeAddress, {isLoading: isStoreAddressLoading,  isSuccess: isStoreAddressSuccess}] = useStoreAddressMutation();
    const [storeOrder, { isLoading: isStoreOrderLoading, isSuccess: storeOrderSuccess }] = usePlaceOrderMutation();

    const [checkoutState, setCheckoutState] = useState({
        addressForm: {
            id: 0,
            address: '',
            phone_number: '',
        },
    });

    const onAddressFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckoutState((state) => ({
            ...state,
            addressForm: {
                ...state.addressForm,
                [e.target.name]: e.target.value,
            }
        }))
    }
    
    const placeOrder = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const addressResponse = await storeAddress(checkoutState.addressForm).unwrap();
        
        const productVariations: [number, number][] = [];
        cart.products.forEach(product => {
            productVariations.push([product.selectedVariation.id as number, product.quantity]);
        });
        
        const orderResponse = await storeOrder({distributor_address_id: addressResponse.id as number, product_variations: productVariations}).unwrap();

        dispatch(resetCart());

        navigate(`/invoice/${orderResponse.id}`);
    }
return (
    <div className="row">
        <div className="col-md-8">
            <div id="checkout-form-wizard" role="application" className="wizard clearfix">
                <div className="content clearfix">
                <section className="card card-body mb-0 body current" id="checkout-form-wizard-p-0" role="tabpanel" aria-labelledby="checkout-form-wizard-h-0" aria-hidden="false">
                    <div className="mb-4">
                        <h6 className="card-title mb-3">Delivery Information</h6>
                        <div className="text-muted">Enter your desired delivery contact</div>
                    </div>
                    <div className="row g-4 mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Deliver Location</label>
                            <Autocomplete className="form-control" apiKey="AIzaSyBoR-KFcg8yHE4-x5xw4ixAQxYhkPbM4Tc" options={
                            {
                                componentRestrictions: { country: 'ke' },
                            }
                        } onPlaceSelected={(place) => {
                            console.log(place);
                            checkoutState.addressForm.address = place.formatted_address;
                        }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Phone Number</label>
                            <input type="text" name="phone_number" value={checkoutState.addressForm.phone_number} onChange={onAddressFormChange} className="form-control" />
                        </div>
                    </div>
                </section>
                
            </div>
        </div>
        </div>
        <div className="col-md-4">
            <h5 className="mb-4">Order Summary</h5>
            <div className="card mb-4">
                <div className="card-body">
                    <h6 className="card-title mb-4">Products</h6>
                    {
                        cart.products.map(product => (
                            <div key={product.product.id} className="list-group list-group-flush">
                                <div className="list-group-item d-flex px-0">
                                    <Link to={`/product/${product.product.slug}`} className="me-3">
                                        <img src={product.product?.images?.[0].url} className="rounded" width="60" alt={product.product.name} />
                                    </Link>
                                    <div>
                                        <h6>{ product.product.name }</h6>
                                        <div>{ product.quantity } x ksh.{ product.selectedVariation.buy_price }</div>
                                    </div>
                                    <div className="text-end ms-auto">ksh.{product.quantity * product.selectedVariation.buy_price}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row justify-content-center">
                        <div className="col-4 text-end">
                            <strong>Total :</strong>
                        </div>
                        <div className="col-4">
                            <strong>ksh.{ cart.total }</strong>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn btn-primary btn-md" onClick={placeOrder}>{ isStoreOrderLoading || isStoreAddressLoading ? "Placing order..."  : "Place Order"}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout