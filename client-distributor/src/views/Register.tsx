import { useAppDispatch } from "@/store/hooks";
import { Country, useFetchCountriesQuery } from "@/store/reducers/countriesSlice";
import { setAuthenticated, useRegisterUserMutation } from "@/store/reducers/userSlice";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

import LogoImg from "@/assets/images/flogo.png";

function Register() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();    
    const [ register, { isSuccess, isLoading } ] = useRegisterUserMutation();
    const { data:countries, isLoading: isFechCountriesLoading } = useFetchCountriesQuery();
    const [registerForm, setRegisterForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone_number: "",
        country_id: "",
        gender: "male",
        parent: "",
        store_name: ""
    });
    
    useEffect(() => {
        if (isSuccess) {
            dispatch(setAuthenticated(true));
            navigate("/dashboard");
        }
    }, [isSuccess, dispatch, navigate])

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        setRegisterForm((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!registerForm.first_name || !registerForm.last_name || !registerForm.store_name || !registerForm.email || !registerForm.password || !registerForm.gender || !registerForm.country_id) return;
        register(registerForm);
    }

    return (
    <div className="form-wrapper">
        <div className="container">
            <div className="card">
                <div className="row g-0">
                    <div className="col">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="ltf-block-logo d-block d-lg-none text-center text-lg-start">
                                    <img width="120" src={LogoImg} alt="logo" />
                                </div>
                                <div className="my-5 text-center text-lg-start">
                                    <h1 className="display-8">Create Account</h1>
                                    <p className="text-muted">You can create a free account now</p>
                                </div>
                                <form className="mb-5">
                                    <div className="mb-3">
                                        <input type="text" name="first_name" onChange={onChange} className="form-control" placeholder="Enter first name" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" name="last_name" onChange={onChange} className="form-control" placeholder="Enter last name" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" name="email" onChange={onChange} className="form-control" placeholder="Enter email" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" name="phone_number" onChange={onChange} className="form-control" placeholder="Phone Number" required />
                                    </div>
                                    <div className="mb-3">
                                        <select name="gender" id="" onChange={onChange} className="form-control" required>
                                            <option defaultValue="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <select name="country_id" id="" onChange={onChange} className="form-control" required>
                                            <option defaultValue="">Select Country</option>
                                            {
                                                countries ? countries.map((country: Country) => <option key={country.name} value={country.id}>{ country.name }</option>) : <option value="">Loading....</option>
                                            }   
                                        </select>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" name="store_name"  onChange={onChange} placeholder="Prefered Store Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span className="input-group-text" id="basic-addon2">.binasta.co.ke</span>
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" name="password" onChange={onChange} className="form-control" placeholder="Enter password" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" onChange={onChange} className="form-control" placeholder="Re-enter password" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" name="parent" onChange={onChange} className="form-control" placeholder="Enter Referal Code" required />
                                    </div>
                                    <div className="text-center text-lg-start">
                                        <button className="btn btn-primary" onClick={onSubmit} disabled={isLoading || isSuccess}>{ isLoading ? "Signing up...." : "Sign Up" }</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col d-none d-lg-flex border-start align-items-center justify-content-between flex-column text-center">
                        <div className="logo">
                            <img width="120" src={LogoImg} alt="logo" />
                        </div>
                        <div>
                            <h3 className="fw-bold">Welcome to Binasta!</h3>
                            <p className="lead my-5">Do you already have an account?</p>
                            <Link to="/login" className="btn btn-primary">Sign In</Link>
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

export default Register;