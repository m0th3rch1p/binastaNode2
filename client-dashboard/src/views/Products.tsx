import { useFetchProductsQuery, Product } from "@/store/reducers/productsSlice";
import DataTable, { TableColumn, TableRow } from 'react-data-table-component'

import { useEffect, useState } from "react";
import ProductForm from "@/components/products/ProductForm";

function Products() {
    const { data: fetchedProducts } = useFetchProductsQuery();
    const [ productsState, setProductsState ] = useState({
      show: false,
      products: [] as Product[]
    });

    useEffect(() => {
      setProductsState((state) => ({
        ...state,
        products: fetchedProducts as Product[]
      }))
    }, [fetchedProducts])


  const columns: TableColumn<Product>[] = [
    {
      name: 'Name',
      selector: (row: TableRow): string => row.name as string
    },
    {
      name: 'Category',
      selector: (row: TableRow): string => row.category_name as string,
    },
    {
      name: 'Product Image',
      selector: (row: Product): string => row.images?.[0].path as string,
      cell: (row) => <img src={row.images?.[0].path} alt={row.product_name} />
    },
    {
      name: 'Total Views',
      selector: (row: TableRow): number => row.views as number
    }
  ];

    return (
      <div className='card'>
      <div className='card-header'>
        <h5>Products</h5>
        <ProductForm show={productsState.show} />
        <button
          type='button'
          id='modalBtn'
          data-bs-toggle='modal'
          data-bs-target='#exampleModal'
          className='btn btn-icon btn-primary'
          onClick={() => setProductsState((state) => ({ ...state, show: !productsState.show }))}
        >
          <i className='bi bi-plus-circle'></i> {productsState.show ? 'Close' : 'Add Product'}
        </button>
      </div>
      <div className='card-body'>
        <DataTable data={productsState.products} columns={columns} responsive />
      </div>
    </div>
  )
}

export default Products;