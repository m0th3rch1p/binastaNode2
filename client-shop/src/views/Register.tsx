import MainRegisterForm from '@/components/checkout/MainRegisterForm'
import { Link } from 'react-router-dom'
import fbLogo from "@/assets/images/logo-facebook.svg"
import googleLogo from "@/assets/images/logo-google.svg";
import appleLogo from "@/assets/images/logo-apple.svg";

function Register() {
    return (
        <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                <div className="row">
                    <div className="col-lg-6 col-md-8">
                        <div className="login_wrap widget-taber-content background-white">
                            <div className="padding_eight_all bg-white">
                                <div className="heading_s1">
                                    <h1 className="mb-5">Create an Account</h1>
                                    <p className="mb-30">Already have an account? <Link to="/">Login</Link></p>
                                </div>
                                <MainRegisterForm />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pr-30 d-none d-lg-block">
                        <div className="card-login mt-115">
                            <a href="#" className="social-login facebook-login">
                                <img src={ fbLogo } alt="Facebook Logo" />
                                    <span>Continue with Facebook</span>
                            </a>
                            <a href="#" className="social-login google-login">
                                <img src={ googleLogo } alt="" />
                                    <span>Continue with Google</span>
                            </a>
                            <a href="#" className="social-login apple-login">
                                <img src={ appleLogo } alt="" />
                                    <span>Continue with Apple</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register