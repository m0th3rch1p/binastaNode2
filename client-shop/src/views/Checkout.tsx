import Billing from "@/components/checkout/Address"
import CartItems from "@/components/checkout/CartItems"
import LoginForm from "@/components/checkout/LoginForm"
import RegisterForm from "@/components/checkout/RegisterForm"

import { useState } from "react"

import { useRegisterUserMutation, useAuthenticateUserMutation } from "@/store/reducers/userSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { usePlaceOrderMutation } from "@/store/reducers/ordersSlice"
import { useStoreAddressMutation } from "@/store/reducers/addressSlice"

function Checkout() {
    const dispatch = useAppDispatch();
    const [addOrder , { isLoading: isAddOrderLoading, isSuccess: isAddOrderSuccess } ] = usePlaceOrderMutation();
    const [ registerUser, { isLoading: isRegisterUserLoading, isSuccess: isRegisterUserSuccess } ] = useRegisterUserMutation();
    const [ addAddress, { isLoading: isAddAddressLoading, isSuccess: isAddAddressSuccess } ] = useStoreAddressMutation();

    const userState = useAppSelector((state) => state.user);
    
    const [addressForm, setAddressForm] = useState({
        id: 0,
        user_id: 0,
        address: '',
        phone_number: '',
      })
    
    const [ userForm, setUserForm ] = useState({
        email: '',
        password: '',
    })
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
        // Register User
        if (!userForm.email || !userForm.password || !addressForm.address || !addressForm.phone_number) return;

        // await dispatch(registerUser(userForm));
        const response = await registerUser(userForm);
        console.log(response);
        addressForm.user_id = userState.id as number;

        const addressResponse = await addAddress(addressForm);
        console.log(addressResponse);
        // await dispatch(storeAddress(addressForm));

        alert("Order To be placed");
    }
  return (
    <div className="container mb-80 mt-50">
            <div className="row">
                <div className="col-lg-8 mb-40">
                    <h1 className="heading-2 mb-10">Checkout</h1>
                    <div className="d-flex justify-content-between">
                        <h6 className="text-body">There are <span className="text-brand">3</span> products in your cart</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7">
                    <div className="row mb-50">
                        <div className="col-lg-6 mb-sm-15 mb-lg-0 mb-md-3">
                            <div className="toggle_info">
                                <span><i className="fi-rs-user mr-10"></i><span className="text-muted font-lg">Already have an account?</span> <a href="#loginform" data-bs-toggle="collapse" className="collapsed font-lg" aria-expanded="false">Click here to login</a></span>
                            </div>
                            <div className="panel-collapse collapse login_form" id="loginform">
                                <div className="panel-body">
                                    <p className="mb-30 font-sm">If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form method="post" className="apply-coupon">
                                <input type="text" placeholder="Enter Coupon Code..." />
                                <button className="btn  btn-md" name="login">Apply Coupon</button>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <h4 className="mb-30">Account Details</h4>
                        <RegisterForm form={ userForm } onChangeFn={ onUserFormChange }/>
                    </div>
                    <div className="row">
                        <h4 className="mb-30">Delivery Details</h4>
                        <Billing form={ addressForm } onChangeFn={ onAddressFormChange } />
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
                        <h4 className="mb-30">Place Order</h4>
                        <button onClick={placeOrder} className="btn btn-fill-out btn-block mt-30">Place an Order<i className="fi-rs-sign-out ml-15"></i></button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Checkout