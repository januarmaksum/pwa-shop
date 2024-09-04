import { create } from "zustand";
import { IProduct } from "../interfaces/product.interfaces";
import { ICategory } from "../interfaces/category.interfaces";

interface StoreState {
  products: IProduct[];
  categories: ICategory[];
  isLoadingProducts: boolean;
  isLoadingCategories: boolean;
  setProducts: (products: IProduct[]) => void;
  setCategories: (categories: ICategory[]) => void;
  setLoadingProducts: (isLoading: boolean) => void;
  setLoadingCategories: (isLoading: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  products: [],
  categories: [],
  isLoadingProducts: false,
  isLoadingCategories: false,
  setProducts: (products) => set({ products }),
  setCategories: (categories) => set({ categories }),
  setLoadingProducts: (isLoading) => set({ isLoadingProducts: isLoading }),
  setLoadingCategories: (isLoading) => set({ isLoadingCategories: isLoading }),
}));

export default useStore;
