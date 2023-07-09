import { useAuthenticateUserMutation } from '@/store/reducers/userSlice'
import React, { useState } from 'react'

function useLoginUser() {
    const [ login, { isLoading, isSuccess, isError } ] = useAuthenticateUserMutation();
    const [ loginState, setLoginState ] = useState({
        email: "",
        password: ""
    });
    
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState((state) => ({ 
            ...state,
            [e.target.name]: e.target.value
        }));
    }; 

    const onLoginUser = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(!loginState.email || !loginState.password) return;
        login(loginState);
    };

    return {
        isLoading,
        isSuccess,
        isError,
        onHandleChange,
        onLoginUser
    }
}

export default useLoginUser