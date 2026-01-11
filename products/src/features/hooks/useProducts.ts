import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api";
import { Product } from "../../types/Product";

export const useProducts = () => {
    return useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: getProducts,
    });
};