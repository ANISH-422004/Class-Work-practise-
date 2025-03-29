import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { initalizeProducts } from "../app/slices/ProductSlice";

export const useGetProductsData = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                const data = response.data; // ✅ No need to use `await` on response.data
                console.log(data);
                dispatch(initalizeProducts(data)); // ✅ Dispatch correct action
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchProducts();
    }, [dispatch]);

    return products;
};
