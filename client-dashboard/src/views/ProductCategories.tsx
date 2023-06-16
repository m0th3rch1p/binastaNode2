import { useEffect, useState } from 'react'
import DataTable, { TableColumn, TableRow } from 'react-data-table-component'

import { ProductCategory, useFetchProductCategoriesQuery } from '@/store/reducers/productCategoriesSlice'
import ProductCategoryForm from '@/components/productCategories/ProductCategoryForm'
function ProductCategories() {
  const { data: fetchedCategories } = useFetchProductCategoriesQuery();

  const [categoriesState, setCategoriesState] = useState({
    show: false,
    categories: [] as ProductCategory[]
  });

  const columns: TableColumn<ProductCategory>[] = [
    {
      name: 'Name',
      selector: (row: TableRow): string => row.name as string
    },
    {
      name: 'Slug',
      selector: (row: TableRow): string => row.slug as string
    },
    {
      name: 'No.Of Blogs',
      selector: (row: TableRow): number => row.blogs_count as number
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
          className='btn btn-icon btn-primary'
          onClick={() => setCategoriesState((state) => ({ ...state, show: !categoriesState.show }))}
        >
          <i className='bi bi-plus-circle'></i> Add Category{' '}
        </button>
      </div>
      <div className='card-body'>
        <DataTable data={categoriesState.categories} columns={columns} responsive />
      </div>
    </div>
  )
}

export default ProductCategories