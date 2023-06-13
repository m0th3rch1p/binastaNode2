import { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { useRegisterUserMutation, resetUserSlice, User } from "@/store/reducers/userSlice";

function LoginForm() {
    const [ register, { isSuccess, isError, isLoading } ] = useRegisterUserMutation();
    const dispatch = useAppDispatch();
    const [ form, setForm ] = useState({
        email: '',
        password: ''
    });
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const authenticate = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!form.email || !form.password) return;

        register(form);

        setForm({
            email: '',
            password: ''
        });
    };

    return (
        <>
            <form method="post">
                <div className="form-group">
                    <input type="text" onChange={ onChange } value={ form.email } name="email" placeholder="Username Or Email" />
                </div>
                <div className="form-group">
                    <input type="password" onChange={ onChange } value={ form.password } name="password" placeholder="Password" />
                </div>
                <div className="login_footer form-group">
                    <div className="chek-form">
                        <div className="custome-checkbox">
                            <input className="form-check-input" type="checkbox" name="checkbox" id="remember" value="" />
                            <label className="form-check-label"><span>Remember me</span></label>
                        </div>
                    </div>
                    <a href="#">Forgot password?</a>
                </div>
                <div className="form-group">
                    <button onClick={ authenticate } className="btn btn-md" name="login">Log in</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm;