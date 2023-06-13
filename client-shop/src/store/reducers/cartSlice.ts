import { Product } from "@/types/Product";
import { ProductVariation } from "@/types/ProductVariation.type";
import { createSlice } from "@reduxjs/toolkit";

export type Cart = {
    total: number,
    products: CartProduct[]
};

export type CartProduct = {
    product: Product,
    selectedVariation: ProductVariation,
    quantity: number
};

const initialState: Cart = {
    total: 0,
    products: [] as CartProduct[]
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        resetCart: () => initialState,
        addCart: (state, action) =>  {
            const {product,  selectedVariation, quantity } = action.payload;
            state.products.push({
                product,
                selectedVariation,
                quantity
            });
            state.total += selectedVariation.buy_price * quantity;
        },
        removeCart: (state, action) => {
            const { slug } = action.payload;
            state.products = state.products.filter(({ product, selectedVariation, quantity }) => {
                if (product.slug !== slug) {
                    state.total -= Math.abs(selectedVariation.buy_price * quantity);
                    if (state.total < 0) state.total = 0;
                    return false;
                } else return true;
            })
        },
    }
});

export const { resetCart, addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;