import { useAppDispatch } from "@/store/hooks";
import { setAuthenticated, useAuthenticateUserMutation } from "@/store/reducers/userSlice";
import { Link, useNavigate } from 'react-router-dom'

import LogoImg from "@/assets/images/flogo.png";
import { useEffect, useState } from "react";

function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [ authenticate, { isLoading: isAuthenticationLoading, isSuccess: isAuthenticationSuccess, isError: isAuthenticationError } ] = useAuthenticateUserMutation();
    const [ loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        if(isAuthenticationSuccess) {
            dispatch(setAuthenticated(true));
            navigate("/dashboard");
        }
    }, [isAuthenticationSuccess, dispatch, navigate]);

    const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const onAuthenticate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!loginForm.email || !loginForm.password) return;
        authenticate(loginForm);
    };

    return (
        <div className="form-wrapper">
        <div className="container">
            <div className="card">
                <div className="row g-0">
                    <div className="col">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="d-block d-lg-none text-center text-lg-start">
                                    <img width="120" src={ LogoImg } alt="logo" />
                                </div>
                                <div className="my-5 text-center text-lg-start">
                                    <h1 className="display-8">Sign In</h1>
                                    <p className="text-muted">Sign in to Vetra to continue</p>
                                </div>
                                <form className="mb-5">
                                    <div className="mb-3">
                                        <input type="email" name="email" onChange={onFormChange} className="form-control" placeholder="Enter email" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" name="password" onChange={onFormChange} className="form-control" placeholder="Enter password" required />
                                    </div>
                                    <div className="text-center text-lg-start">
                                        <p className="small">Can't access your account? <a href="#">Reset your password now</a>.</p>
                                        <button className="btn btn-primary" onClick={onAuthenticate}>{ isAuthenticationLoading ? "Siging in...." : "Sign In" }</button>
                                    </div>
                                </form>
                                <p className="text-center d-block d-lg-none mt-5 mt-lg-0">
                                    Don't have an account? <Link to="/register">Sign up</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col d-none d-lg-flex border-start align-items-center justify-content-between flex-column text-center">
                        <div className="logo">
                            <img width="120" src={ LogoImg } alt="logo" />
                        </div>
                        <div>
                            <h3 className="fw-bold">Welcome to Binasta!</h3>
                            <p className="lead my-5">If you don't have an account, would you like to register right now?</p>
                            <a href="#" className="btn btn-primary">Sign Up</a>
                        </div>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login