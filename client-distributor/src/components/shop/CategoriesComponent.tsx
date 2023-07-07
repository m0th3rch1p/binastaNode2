import { ProductCategory } from '@/store/reducers/productCategorySlice'

function CategoriesComponent(props: { categories: ProductCategory[] }) {
    return (
        <div className="d-flex flex-column gap-3">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="categoryCheck1" />
                <label className="form-check-label">
                    All
                </label>
            </div>
            {
                props.categories.map(category => (
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="categoryCheck2" />
                        <label className="form-check-label">
                            { category.name }
                        </label>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoriesComponent