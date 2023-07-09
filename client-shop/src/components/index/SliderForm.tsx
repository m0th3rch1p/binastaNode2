import useStoreSubscriber from "@/hooks/useStoreSubscriber"

function SliderForm() {
    const { isLoading, isSuccess, isError, onHandleChange, onSubmitSubscriber } = useStoreSubscriber();
    return (
    <form className='form-subcriber d-flex'>
        <input type='email' name="email" onChange={onHandleChange} placeholder='Your emaill address' required/>
        <button disabled={isSuccess} className='btn' type='submit' onClick={onSubmitSubscriber}>
            { isLoading ? "Subscribing..." : isSuccess ? "Subscribed" : "Subscribe"}
        </button>

    </form>
  )
}

export default SliderForm