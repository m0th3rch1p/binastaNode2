import Billing from "@/components/checkout/Address"
import CartItems from "@/components/checkout/CartItems"
import LoginForm from "@/components/checkout/LoginForm"
import RegisterForm from "@/components/checkout/RegisterForm"

import { useState } from "react"

import { useRegisterUserMutation, useAuthenticateUserMutation, setAuthenticated } from "@/store/reducers/userSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { Order, usePlaceOrderMutation } from "@/store/reducers/ordersSlice"
import { useStoreAddressMutation } from "@/store/reducers/addressSlice"
import { resetCart } from "@/store/reducers/cartSlice"
import { redirect } from "react-router-dom"

function Checkout() {
    const dispatch = useAppDispatch();
    // const [addOrder , { isLoading: isAddOrderLoading, isSuccess: isAddOrderSuccess } ] = usePlaceOrderMutation();
    const [registerUser] = useRegisterUserMutation();
    const [storeAddress] = useStoreAddressMutation();
    const [storeOrder] = usePlaceOrderMutation();

    const user = useAppSelector((state) => state.user);
    const cart = useAppSelector((state) => state.cart);

    const [addressForm, setAddressForm] = useState({
        id: 0,
        user_id: 0,
        address: '',
        phone_number: '',
    })

    const [userForm, setUserForm] = useState({
        email: '',
        password: '',
    });

    const [ showLoginForm, setShowLoginForm ] = useState(false);

    const onAddressFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddressForm((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const onUserFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserForm((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const placeOrder = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!user.authenticated) {
            // Register User
            if (!userForm.email || !userForm.password || !addressForm.address || !addressForm.phone_number) return;

            // await dispatch(registerUser(userForm));
            const response = await registerUser(userForm).unwrap();
            console.log(response);
            dispatch(setAuthenticated(response.status))
        }

        const addressResponse = await storeAddress(addressForm).unwrap();
        
        console.log(addressResponse);
        const productVariations: [number, number][] = [];
        cart.products.forEach(product => {
            productVariations.push([product.selectedVariation.id as number, product.quantity]);
        });
        
        const orderResponse = await storeOrder({user_address_id: addressResponse.id as number, product_variations: productVariations}).unwrap();

        dispatch(resetCart());

        redirect(`/invoice/${orderResponse.id}`);
    }
    return (
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
                                            <span><i className="fi-rs-user mr-10"></i><span className="text-muted font-lg">Already have an account?</span> <a href="#0" onClick={() => setShowLoginForm((showForm) => !showForm)} data-bs-toggle="collapse" className="collapsed font-lg" aria-expanded="false">Click here to login</a></span>
                                        </div>
                                        <div className={`panel-collapse collapse login_form ${showLoginForm ?? 'show'}`} id="loginform">
                                            <div className="panel-body">
                                                <p className="mb-30 font-sm">If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
                                                <LoginForm />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <h4 className="mb-30">Account Details</h4>
                                    <RegisterForm form={userForm} onChangeFn={onUserFormChange} />
                                </div>
                            </>
                        ) : <></>
                    }
                    <div className="row">
                        <h4 className="mb-30">Delivery Details</h4>
                        <Billing form={addressForm} onChangeFn={onAddressFormChange} />
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
                        <button onClick={placeOrder} className="btn btn-fill-out btn-block mt-30">Place an Order<i className="fi-rs-sign-out ml-15"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout