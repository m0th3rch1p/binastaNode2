import { useEffect, useState } from 'react'
import DataTable, { TableColumn, TableRow } from 'react-data-table-component'

import { ProductCategory, useFetchProductCategoriesQuery } from '@/store/reducers/productCategoriesSlice'
import ProductCategoryForm from '@/components/productCategories/ProductCategoryForm'
function ProductCategories() {
  const { data: fetchedCategories } = useFetchProductCategoriesQuery();

  const [categoriesState, setCategoriesState] = useState({
    show: false,
    categories: [] as any[]
  });

  const columns: TableColumn<ProductCategory>[] = [
    {
      name: 'Name',
      selector: (row: TableRow): string => row.name as string
    },
    {
      name: 'Category Image',
      selector: (row) => row.image_path as string,
      cell: (row: TableRow) => (<img src={row.image_path as string} alt={row.name as string} style={{ width: "50px", height: "50px"}} />)
    },
    {
      name: 'Created At',
      selector: (row: TableRow): string => new Date(row.created_at as string).toLocaleDateString(),
    }
  ];

  useEffect(() => {
    setCategoriesState((state) => ({
      ...state,
      categories: fetchedCategories as ProductCategory[]
    }));
  }, [fetchedCategories, categoriesState.categories])


  return (
    
    <div className='card'>
      <div className='card-header'>
        <h5>Product Categories</h5>
        <ProductCategoryForm show={categoriesState.show} />
        <button
          type='button'
          id='modalBtn'
          data-bs-toggle='modal'
          data-bs-target='#exampleModal'
          className='btn btn-icon btn-primary mt-2'
          onClick={() => setCategoriesState((state) => ({ ...state, show: !categoriesState.show }))}
        >
          <i className='bi bi-plus-circle'></i>{categoriesState.show ? 'Close' : 'Add Category'}
        </button>
      </div>
      <div className='card-body'>
        <DataTable data={categoriesState.categories} columns={columns} />
      </div>
    </div>
  )
}

export default ProductCategories