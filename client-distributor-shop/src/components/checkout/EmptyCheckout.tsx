import React from 'react'

import shoppingCartImg from "@/assets/images/shopping-empty.png";
import { Link } from 'react-router-dom';

function EmptyCheckout() {
  return (
    <div className="page-content pt-150 pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-10 col-md-12 m-auto text-center">
                        <p className="mb-20"><img src={shoppingCartImg} alt="" className="hover-up" /></p>
                        <h1 className="display-2 mb-30">Cart Is Empty</h1>
                        <p className="font-lg text-grey-700 mb-30">
                            You Haven't added anything to your cart. Visit Our Shop Below
                        </p>
                        <Link className="btn btn-default submit-auto-width font-xs hover-up mt-30" to="/shop"><i className="fi-rs-home mr-5"></i> Back To Shop</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default EmptyCheckout;