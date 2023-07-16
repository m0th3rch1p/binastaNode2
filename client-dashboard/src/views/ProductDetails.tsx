import { ProductVariation, useFetchProductByIdQuery, useStoreProductVariationMutation } from '@/store/reducers/productsSlice';
import { useParams } from 'react-router'
import DataTable, { TableColumn, TableRow } from 'react-data-table-component'
import { useEffect, useState } from 'react';
import ProductVariationForm from '@/components/products/ProductVariationForm';

function ProductDetails() {
    const columns: TableColumn<ProductVariation>[] = [
        {
          name: 'Variation',
          selector: (row: ProductVariation): string => row.variation as string
        },
        {
          name: 'Buying Price',
          selector: (row: ProductVariation): number => row.buy_price as number,
        },
        {
          name: 'Selling Price',
          selector: (row: ProductVariation): number => row.sale_price as number,
        },
        {
            name: 'Wholesale Price',
            selector: (row: ProductVariation): number => row.wholesale_price as number
        },
        {
          name: 'Wholesale Min',
          selector: (row: ProductVariation): number => row.wholesale_min as number
        },
        {
            name: 'Created At',
            selector: (row: ProductVariation): string => new Date(row.created_at as string).toLocaleDateString()
        }
      ];
    const params = useParams();
    const { data: product, isLoading } = useFetchProductByIdQuery(parseInt(params.id as string));
    const [ storeVariation, {isLoading: isStoreVariationLoading, isSuccess: isStoreVariationSuccess} ] = useStoreProductVariationMutation();
      const [ variationState, setVariationState ] = useState({
        form: {
            variation: "",
            stock: 0,
            product_id: parseInt(params.id as string),
            buy_price: 0,
            sale_price: 0,
            wholesale_min: 0,
            wholesale_price: 0,
            recomended_price: 0
        },
        showForm: false
      });

      useEffect(() => {
        if (isStoreVariationSuccess) {
            setVariationState((state) => ({
                ...state,
                form: {
                    variation: "",
                    stock: 0,
                    product_id: parseInt(params.id as string),
                    buy_price: 0,
                    sale_price: 0,
                    wholesale_min: 0,
                    wholesale_price: 0,
                    recomended_price: 0
                }
            }))
        }
      }, [ isStoreVariationSuccess, params.id ]);

      const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVariationState((state) => ({
            ...state,
            form: {
                ...state.form,
                [e.target.name]: e.target.value
            } 
        }));
        };

        const onStoreVariant = (e: React.MouseEvent<HTMLButtonElement | HTMLInputElement>) => {
            e.preventDefault();
            if (!variationState.form.variation || !variationState.form.stock || !variationState.form.sale_price || !variationState.form.buy_price || !variationState.form.wholesale_min || !variationState.form.wholesale_price) return;
            
            storeVariation(variationState.form);
        };
    return (
    <div className="row">
    <div className="col-md-12">
        <div className="card mb-4">
            <div className="card-body">
            {
                !isLoading && product ? (
                    <div className="row">
                    <div className="col-md-5">
                        <img src={ `/${product.images?.[0].url}` } className="w-100 rounded" alt={product?.name} />
                    </div>
                    <div className="col-md-7">
                        <div className="d-flex justify-content-between align-items-start mt-4 mt-md-0">
                            <div>
                                <div className="small text-muted mb-2">{ product?.category_name }</div>
                                <h2>{ product?.name }</h2>
                                <p>
                                    <span className="badge bg-success">In stock</span>
                                </p>
                                <p>{ product?.description }</p>
                                <div className="row">
                                    <div className="col">

                                    </div>
                                </div>
                                <div className="d-flex gap-2 mb-3">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-muted"></i>
                                    <span>(3)</span>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <ProductVariationForm form={variationState.form} onChange={onHandleChange} onStoreVariant={onStoreVariant} showForm={variationState.showForm} isLoading={isStoreVariationLoading} />
                                        <button className="btn btn-success btn-sm" onClick={() => {
                                            setVariationState((state) => ({ ...state, showForm: !state.showForm }))
                                        }}>{ variationState.showForm ? "Close Form" : "New Variation" }</button>
                                    </div>
                                    <div className="card-body">
                                        <DataTable data={product.variations ?? []} columns={columns} responsive />
                                    </div>
                                </div>
                                {/* <form className="mt-4">
                                    <div className="row row-cols-lg-auto">
                                        <div className="col-12">
                                            <div className="input-group">
                                                <input min="1" type="number" onChange={onChangeQuantity} className="form-control" value={selected.quantity} />
                                                <button className="btn btn-primary" onClick={onAddCart} type="button">{selected.inCart ? 'In Cart' : 'Add to cart'}</button>
                                            </div>
                                        </div>
                                    </div>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
                ) : (<></>)
            }
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductDetails