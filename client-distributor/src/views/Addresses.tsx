import { useFetchAddressesQuery } from "@/store/reducers/addressSlice"

function Addresses() {
    const { data: addresses, isLoading: isFetchAddressesLoading, isError: isFetchAddressesError } = useFetchAddressesQuery();
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="row g-4 mb-4">
                    {
                        addresses?.map((address, index) => (
                            <div key={index} className="col-md-6 col-sm-12">
                                <div className="card">
                                    <div className="card-body d-flex flex-column gap-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="mb-0">Delivery Location</h5>
                                            <a href="#">Edit</a>
                                        </div>
                                        <div>{ address.address }</div>
                                        {/* <div>81 Fulton Park, Brazil/Pedro Leopoldo</div> */}
                                        <div>
                                            <i className="bi bi-telephone me-2"></i> { address.phone_number }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <p>
                    <a className="btn btn-outline-primary btn-icon" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <i className="bi bi-plus-circle"></i> Add New Address
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Addresses