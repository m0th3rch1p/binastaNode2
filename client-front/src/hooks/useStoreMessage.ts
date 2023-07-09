import { Message, useStoreMessageMutation } from '@/store/reducers/messagesSlice'
import { useEffect, useState } from 'react';

function useStoreMessage() {    
    let validations: boolean = false;    
    const [ storeMessage, { isLoading, isError, isSuccess } ] = useStoreMessageMutation();
    const [ messageState, setMessageState ] = useState({
        name: "",
        email: "",
        phone_number: "",
        message: ""
    });
    
    useEffect(() => {
        if (isSuccess) {
            setMessageState({
                name: "",
                email: "",
                phone_number: "",
                message: ""
            });
        }
    }, [ isSuccess ])

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setMessageState((state) => ({
            ...state,
            [e.target.name] : e.target.value
        }));
    };

    const onSubmitMessage = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!messageState.name || !messageState.email || !messageState.phone_number || !messageState.message) {
            return { validations, isLoading, isError, isSuccess };
        }
        
        validations = true;    
        storeMessage(messageState);
    };    
    return {
        validations,
        messageState,
        onHandleChange,
        onSubmitMessage,
        isLoading,
        isError,
        isSuccess
    };
}

export default useStoreMessage