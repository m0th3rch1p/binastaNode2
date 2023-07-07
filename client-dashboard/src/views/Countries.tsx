import { useEffect, useState } from 'react'
import CountryForm from "@/components/countries/CountryForm";
import { Country, useFetchCountriesQuery } from "@/store/reducers/countriesSlice"
import DataTable, { TableColumn, TableRow } from 'react-data-table-component'

function Countries() {
  const { data: countries, isLoading: isFetchCountryLoading, isSuccess: isFetchCountrySuccess, isError: isFetchCountryError } = useFetchCountriesQuery();
  const [countriesState, setCountriesState] = useState({
    show: false,
    countries: [] as Country[]
  });

  const columns: TableColumn<Country>[] = [
    {
      name: 'Name',
      selector: (row: TableRow): string => row.name as string
    },
    {
      name: 'Country Code',
      selector: (row: TableRow): string => row.country_code as string
    },
    {
      name: 'Created At',
      selector: (row: TableRow): string => new Date(row.created_at as string).toLocaleDateString(),
    }
  ];

  useEffect(() => {
    if (isFetchCountrySuccess) {
      console.log(countries);
      setCountriesState((state) => ({
        ...state,
        countries: countries as Country[]
      }))
    }
  }, [isFetchCountrySuccess, countries]);
  return (
    <>
      <div className='card'>
        <div className='card-header'>
          <h5>Countries</h5>
          <CountryForm show={countriesState.show} />
          <button
            type='button'
            id='modalBtn'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
            className='btn btn-icon btn-primary'
            onClick={() => setCountriesState((state) => ({ ...state, show: !state.show }))}
          >
            <i className='bi bi-plus-circle'></i>{countriesState.show ? 'Close' : 'Add Country'}
          </button>
        </div>
        <div className='card-body'>
          <DataTable data={countriesState.countries} columns={columns} responsive />
        </div>
      </div>
    </>
  )
}

export default Countries