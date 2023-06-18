import { useFetchAddressesQuery } from "@/store/reducers/addressSlice"

function Addresses() {
    const { data: addresses } = useFetchAddressesQuery();
    return (
        <div className="row">
            {
                addresses ? addresses.map(address => (
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0">Delivery Address</h5>
                            </div>
                            <div className="card-body">
                                <address>
                                    Address: { address.address }<br />
                                    Phone Number: { address.phone_number }
                                </address>
                                <a href="#0" className="btn-small">Edit</a>
                            </div>
                        </div>
                    </div>
                )) : (<></>)
            }
        </div>
    )
}

export default Addresses