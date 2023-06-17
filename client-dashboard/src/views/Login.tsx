import { setAuthenticated, useAuthenticateUserMutation } from "@/store/reducers/userSlice";
import { useAppDispatch } from "@/hooks/hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [ loginForm, setLoginForm ] = useState({
        email: '',
        password: ''
    });
    const [ authenticateUser, { isLoading, isSuccess } ] = useAuthenticateUserMutation();

    useEffect(() => {
        console.log(isSuccess);
        if (isSuccess) {
            dispatch(setAuthenticated(true));
            navigate("/");
        }        
    }, [isSuccess]);

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onHandleAuthenthenticateUser = () => {
        if (!loginForm.email || !loginForm.password) return;

        authenticateUser({email: loginForm.email, password: loginForm.password});
    }
  return (
    <div className="form-wrapper">
        <div className="container">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="d-block d-lg-none text-center text-lg-start">
                                    <img width="120" src="https://vetra.laborasyon.com/assets/images/logo.svg" alt="logo" />
                                </div>
                                <div className="my-5 text-center text-lg-start">
                                    <h1 className="display-8">Sign In</h1>
                                </div>
                                <form className="mb-5">
                                    <div className="mb-3">
                                        <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={onHandleChange} value={loginForm.email} required={true} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" name="password" className="form-control" onChange={onHandleChange} value={loginForm.password} placeholder="Enter password" required={true} />
                                    </div>
                                    <div className="text-center text-lg-start">
                                        <p className="small">Can't access your account? <a href="#0">Reset your password now</a>.</p>
                                        <button className="btn btn-primary" onClick={onHandleAuthenthenticateUser} disabled={isLoading}>{ isLoading ? 'Signing In...' : 'Sign In' }</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login