import React from 'react'

function ProductVariationForm({ form , onChange, onStoreVariant, showForm, isLoading} : { 
    form: {
        variation: string,
        stock: number,
        product_id: number,
        buy_price: number,
        sale_price: number,
        wholesale_min: number,
        wholesale_price: number,
        recomended_price: number,
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any,
    onStoreVariant: (e: React.MouseEvent<HTMLButtonElement | HTMLInputElement>) => any,
    showForm: boolean,
    isLoading: boolean,
}) {
  return (
    <div className="card" style={{
        display: `${showForm ? "inline-block" : "none"}`
    }}>
        <div className="card-header">
            <h5>Add Variant</h5>
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="row mb-3">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="variant">Variant</label>
                                    <input type="text" name="variation" value={form.variation} onChange={onChange} placeholder='Variant (eg. 300mg)' className="form-control" required/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="current_stock">Current Stock</label>
                                    <input type="number" min="0" step="0.01" name="stock" value={form.stock} onChange={onChange} placeholder='Stock' className="form-control" required/>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="buying_price">Buying Price</label>
                                    <input type="number" min="0" step="0.01" name="buy_price" value={form.buy_price} onChange={onChange} placeholder='Buying Price' className="form-control" required/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                <label htmlFor="selling_price">Selling Price</label>
                                    <input type="number" min="0" step="0.01" name="sale_price" value={form.sale_price} onChange={onChange} placeholder='Selling Price' className="form-control" required/>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="wholesale_min">Wholesale Min</label>
                                    <input type="number" min="0" step="1" name="wholesale_min" value={form.wholesale_min} onChange={onChange} placeholder='Wholesale Min' className="form-control" required/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="wholesale_price">Wholesale Price</label>
                                    <input type="number" min="0" step="0.01" name="wholesale_price" value={form.wholesale_price} onChange={onChange} placeholder='Wholesale Price' className="form-control" required/>
                                </div>
                            </div>
                        </div>
                        <div className="row">`
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="recommended_price">Recommended Price</label>
                                    <input type="number" min="0" step="0.01" name="recomended_price" value={form.recomended_price} onChange={onChange} placeholder='Wholesale Min' className="form-control" required/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <button className="btn-primary btn-sm" onClick={onStoreVariant}>{ isLoading ? "Adding Variant..." : "Add Variant" }</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductVariationForm