import { Subscriber, useStoreSubscriberMutation } from "@/store/reducers/subscriberSlice";
import React, { useState } from "react"

function useStoreSubscriber() {
    const [ storeSubscriber, { isLoading, isSuccess, isError } ] = useStoreSubscriberMutation();
    const [ subscriberState, setSubscriberState ] = useState({
        email: ""
    });

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubscriberState((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmitSubscriber = (e: React.MouseEvent<HTMLButtonElement | HTMLInputElement>) => {
        e.preventDefault();
        if (!subscriberState.email) return;

        storeSubscriber(subscriberState as Subscriber);
    };

    return {
        isLoading,
        isSuccess,
        isError,
        onHandleChange,
        onSubmitSubscriber
    }
}

export default useStoreSubscriber