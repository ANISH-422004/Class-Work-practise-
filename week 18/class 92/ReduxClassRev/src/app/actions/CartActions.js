import { removeFromCart } from "../slices/CartSlice";

export const asyncRemoveItemFromCart = (id) => (dispatch, getState) => {
    console.log(getState().cart); // ✅ Fix: Use `getState()` instead of `state`
    console.log("Will remove item from cart after 1 second");

    setTimeout(() => {
        dispatch(removeFromCart(id)); // ✅ Fix: Correct payload
    }, 1000);
};
