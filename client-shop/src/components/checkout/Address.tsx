
import Autocomplete from "react-google-autocomplete";

function Billing(props: { form: { address: string, phone_number: string }, onChangeFn: React.ChangeEventHandler }) {
    return (
        <>
            <form method="post">
                <div className="row">
                    <div className="form-group col-lg-6">
                        <Autocomplete apiKey="AIzaSyBoR-KFcg8yHE4-x5xw4ixAQxYhkPbM4Tc" options={
                            {
                                componentRestrictions: { country: 'ke' },
                                types: []
                            }
                        } onPlaceSelected={(place) => {
                            props.form.address = place.formatted_address;
                        }} />
                    </div>
                    <div className="form-group col-lg-6">
                        <input type="text" onChange={props.onChangeFn} required={true} value={props.form.phone_number} name="phone_number" placeholder="Phone number *" />
                    </div>
                </div>
            </form>
        </>
    )
}
export default Billing