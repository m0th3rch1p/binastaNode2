import useRegisterUser from "@/hooks/useRegisterUser"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function MainRegisterForm() {
    const { isLoading, isSuccess, isError, onHandleChange, onSubmitRegistration } = useRegisterUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (isSuccess) navigate("/");
    }, [ isSuccess , navigate]);
    return (
    <form method="post">
        <div className="form-group">
            <input type="text" required  onChange={onHandleChange} name="email" placeholder="Email" />
        </div>
        <div className="form-group">
            <input required type="password" onChange={onHandleChange} name="password" placeholder="Password" />
        </div>
        <div className="login_footer form-group mb-50">
            <div className="chek-form">
                <div className="custome-checkbox">
                    <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox12"  />
                        <label className="form-check-label"><span>I agree to terms &amp; Policy.</span></label>
                </div>
            </div>
            <Link to="https://binasta.co.ke/terms"><i className="fi-rs-book-alt mr-5 text-muted"></i>Lean more</Link>
        </div>
        <div className="form-group mb-30">
            <button type="submit" onClick={onSubmitRegistration} className="btn btn-fill-out btn-block hover-up font-weight-bold" name="login">{isLoading ? "Registering..." : "Submit &amp; Register"}</button>
        </div>
        <p className="font-xs text-muted"><strong>Note:</strong>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
    </form>
  )
}

export default MainRegisterForm