import { useEffect, useState } from "react";
import { useStoreCountryMutation } from "@/store/reducers/countriesSlice"

function CountryForm({ show }: { show: boolean }) {
    const [ storeCountry, { isLoading, isError, isSuccess } ] = useStoreCountryMutation();
    const [countryForm, setCountryForm] = useState({
      name: '',
      country_code: ''
    });
    
    useEffect(() => {
        if (isSuccess) {
            setCountryForm((state) => ({ 
                name: '',
                country_code: ''
            }))
        }
    }, [isSuccess])

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCountryForm((state) => ({
          ...state,
          [e.target.name]: e.target.value 
      }));
  };
  
  const onStoreCountry = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!countryForm.name || !countryForm.country_code) return;
      storeCountry({ country: { ...countryForm } });
  };
  return (
    <form style={{
        display: show ? 'block' : 'none'
    }}>
        <div className="row">
            <div className="col">
                <div className="form-group">
                    <label>Country Name</label>
                    <input type="text" name="name" value={countryForm.name} onChange={onHandleChange} className="form-control" required={true} />
                </div>
            </div>
            <div className="col">
                <div className="form-group">
                    <label>Country Code</label>
                    <input type="text" name="country_code" value={countryForm.country_code} onChange={onHandleChange} className="form-control" required={true} />
                </div>
            </div>
        </div>
        <div className="form-group mt-4">
            <button id="submitBtn" onClick={onStoreCountry} type="submit" className="btn btn-primary" disabled={isLoading}>
                { isLoading ? 'Saving...' : 'Save' } 
            </button>
        </div>
    </form>
  )
}

export default CountryForm