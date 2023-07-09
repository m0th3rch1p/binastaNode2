import { useRegisterUserMutation } from '@/store/reducers/userSlice';
import React, { useState } from 'react'

function useRegisterUser() {
    const [ register, { isLoading, isSuccess, isError } ] = useRegisterUserMutation();
    const [ registerState, setRegisterState ] = useState({
        email: "",
        password: ""
    });

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterState((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmitRegistration = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!registerState.email || !registerState.password) return;

        register(registerState);
    };

  return {
    isLoading,
    isSuccess,
    isError,
    onHandleChange,
    onSubmitRegistration
  };
}

export default useRegisterUser