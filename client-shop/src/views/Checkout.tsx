import Billing from "@/components/checkout/Address"
import CartItems from "@/components/checkout/CartItems"
import LoginForm from "@/components/checkout/LoginForm"
import RegisterForm from "@/components/checkout/RegisterForm"

import { useState } from "react"

import { useRegisterUserMutation, setAuthenticated } from "@/store/reducers/userSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { usePlaceOrderMutation } from "@/store/reducers/ordersSlice"
import { useStoreAddressMutation } from "@/store/reducers/addressSlice"
import { resetCart } from "@/store/reducers/cartSlice"
import { useNavigate } from "react-router-dom"
import EmptyCheckout from "@/components/checkout/EmptyCheckout"

function Checkout() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    // const [addOrder , { isLoading: isAddOrderLoading, isSuccess: isAddOrderSuccess } ] = usePlaceOrderMutation();
    const [registerUser, {isLoading: isRegisterUserLoading,  isSuccess: isRegisterUserSuccess }] = useRegisterUserMutation();
    const [storeAddress, {isLoading: isStoreAddressLoading,  isSuccess: isStoreAddressSuccess}] = useStoreAddressMutation();
    const [storeOrder, { isLoading: isStoreOrderLoading, isSuccess: storeOrderSuccess }] = usePlaceOrderMutation();

    const user = useAppSelector((state) => state.user);
    const cart = useAppSelector((state) => state.cart);

    const [checkoutState, setCheckoutState] = useState({
        addressForm: {
            id: 0,
            address: '',
            phone_number: '',
        },
        userForm: {
            email: '',
            password: '',
        },
        showLoginForm: false
    })

    const onAddressFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckoutState((state) => ({
            ...state,
            addressForm: {
                ...state.addressForm,
                [e.target.name]: e.target.value,
            }
        }))
    }

    const onUserFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckoutState((state) => ({
            ...state,
            userForm: {
                ...state.userForm,
                [e.target.name]: e.target.value,
            }
        }));
    }

    const placeOrder = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!user.authenticated) {
            // Register User
            if (!checkoutState.userForm.email || !checkoutState.userForm.password || !checkoutState.addressForm.address || !checkoutState.addressForm.phone_number) return;

            // await dispatch(registerUser(userForm));
            const response = await registerUser(checkoutState.userForm).unwrap();
            dispatch(setAuthenticated(response.status))
        }

        const addressResponse = await storeAddress(checkoutState.addressForm).unwrap();
        
        const productVariations: [number, number][] = [];
        cart.products.forEach(product => {
            productVariations.push([product.selectedVariation.id as number, product.quantity]);
        });
        
        const orderResponse = await storeOrder({user_address_id: addressResponse.id as number, product_variations: productVariations}).unwrap();

        dispatch(resetCart());

        navigate(`/invoice/${orderResponse.id}`);
    }
    return (
        cart.products.length ? 
        (
            <div className="container mb-80 mt-50">
            <div className="row">
                <div className="col-lg-8 mb-40">
                    <h1 className="heading-2 mb-10">Checkout</h1>
                    <div className="d-flex justify-content-between">
                        <h6 className="text-body">There are <span className="text-brand">{ cart.products.length }</span> products in your cart</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7">
                    {
                        !user.authenticated ? (
                            <>
                                <div className="row mb-50">
                                    <div className="col-lg-6 mb-sm-15 mb-lg-0 mb-md-3">
                                        <div className="toggle_info">
                                            <span><i className="fi-rs-user mr-10"></i><span className="text-muted font-lg">Already have an account?</span> <a href="#0" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                                e.preventDefault();
                                                setCheckoutState((state) => ({ ...state, showLoginForm: !state.showLoginForm }))
                                            }} data-bs-toggle="collapse" className="collapsed font-lg" aria-expanded="false">Click here to login</a></span>
                                        </div>
                                        <div className={`panel-collapse collapse login_form ${checkoutState.showLoginForm ? 'show' : ''}`} id="loginform">
                                            <div className="panel-body">
                                                <p className="mb-30 font-sm">If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
                                                <LoginForm />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <h4 className="mb-30">Account Details</h4>
                                    <RegisterForm form={checkoutState.userForm} onChangeFn={onUserFormChange} />
                                </div>
                            </>
                        ) : <></>
                    }
                    <div className="row">
                        <h4 className="mb-30">Delivery Details</h4>
                        <Billing form={checkoutState.addressForm} onChangeFn={onAddressFormChange} />
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="border p-40 cart-totals ml-30 mb-50">
                        <div className="d-flex align-items-end justify-content-between mb-30">
                            <h4>Your Order</h4>
                            <h6 className="text-muted">Subtotal</h6>
                        </div>
                        <div className="divider-2 mb-30"></div>
                        <div className="table-responsive order_table checkout">
                            <CartItems />
                        </div>
                    </div>
                    <div className="payment ml-30">
                        <button onClick={placeOrder} className="btn btn-fill-out btn-block mt-30" disabled={isRegisterUserLoading || isStoreAddressLoading || isStoreOrderLoading}>
                          { isRegisterUserLoading || isStoreAddressLoading || isStoreOrderLoading ? 'Placing Order...' : 'Place an Order'}<i className="fi-rs-sign-out ml-15"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        ) : (<EmptyCheckout />)
    )
}

export default Checkout