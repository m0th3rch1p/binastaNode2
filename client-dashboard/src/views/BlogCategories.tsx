import { useEffect, useState } from 'react'
import { BlogCategory, useFetchBlogCategoriesQuery } from '@/store/reducers/blogCategoriesSlice'

import DataTable, { TableColumn, TableRow } from 'react-data-table-component'
import BlogCategoryForm from '@/components/blogCategories/BlogCategoryForm';

function BlogCategories() {
  const { data: fetchedCategories } = useFetchBlogCategoriesQuery();
  const [categoriesState, setCategoriesState] = useState({
    show: false,
    categories: [] as BlogCategory[]
  });

  const columns: TableColumn<BlogCategory>[] = [
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
      categories: fetchedCategories as BlogCategory[]
    }));
  }, [fetchedCategories, categoriesState.categories])

  return (
    <>
      <div className='card'>
        <div className='card-header'>
          <h5>Blog Categories</h5>
          <BlogCategoryForm show={categoriesState.show} />
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
    </>
  )
}

export default BlogCategories
