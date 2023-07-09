import useLoginUser from '@/hooks/useLoginUser'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logoImg from "@/assets/images/login.jpeg";

function Login() {
    const navigate = useNavigate();
    const { isLoading, isError, isSuccess, onHandleChange, onLoginUser } = useLoginUser();

    useEffect(() => {
        if (isSuccess) navigate("/");
    }, [isSuccess, navigate]);
    return (
        <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                <div className="row">
                    <div className="col-lg-6 pr-30 d-none d-lg-block">
                        <img className="border-radius-15" src={ logoImg } alt="" />
                    </div>
                    <div className="col-lg-6 col-md-8">
                        <div className="login_wrap widget-taber-content background-white">
                            <div className="padding_eight_all bg-white">
                                <div className="heading_s1">
                                    <h1 className="mb-5">Login</h1>
                                    <p className="mb-30">Don't have an account? <Link to="/register">Create here</Link></p>
                                </div>
                                <form method="post">
                                    <div className="form-group">
                                        <input type="text" required name="email" onChange={onHandleChange} placeholder="Username or Email *" />
                                    </div>
                                    <div className="form-group">
                                        <input required type="password" name="password" onChange={onHandleChange} placeholder="Your password *" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-heading btn-block hover-up" onClick={onLoginUser} name="login">{isLoading ? "Logging In..." : "Log in"}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login