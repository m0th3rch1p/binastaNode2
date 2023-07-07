import { Product } from "./productsSlice";
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
        resetCart: (state) => {
            state = initialState;
        },
        addCart: (state, action) =>  {
            const {product,  selectedVariation, quantity } = action.payload;
            state.products.push({
                product,
                selectedVariation,
                quantity
            });
            state.total += selectedVariation.buy_price * quantity;
        },
        changeQuantity: (state, action) => {
            const product = state.products.find(({ product }) => product.id === action.payload.product_id);
            if (product) {
                state.total -= product.quantity * product.selectedVariation.buy_price;
                product.quantity = action.payload.quantity;
                state.total += product.quantity * product.selectedVariation.buy_price;
            }
        },
        changeSelectedVariation: (state, action) => {
            const product = state.products.find(({ product }) => product.id === action.payload.product_id);
            if (product) {
                state.total -= product.quantity * product.selectedVariation.buy_price;
                product.selectedVariation = action.payload.selectedVariation;
                state.total += product.quantity * product.selectedVariation.buy_price;
            }
        },
        removeCart: (state, action) => {
            const { product_id } = action.payload;
            state.products = state.products.filter(({ product, selectedVariation, quantity }) => {
                if (product.id === product_id) {
                    state.total -= selectedVariation.buy_price * quantity;
                    if (state.total < 0) state.total = 0;
                    return false;
                } else return true;
            })
        },
    }
});

export const { resetCart, addCart, changeQuantity, changeSelectedVariation, removeCart } = cartSlice.actions;

export default cartSlice.reducer;