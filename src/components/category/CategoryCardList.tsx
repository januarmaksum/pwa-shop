import React from "react";
import CategoryCard from "./CategoryCard";
import { ICategory } from "../../interfaces/category.interfaces";

interface CategoryCardListProps {
  categories: ICategory[];
}

const CategoryCardList: React.FC<CategoryCardListProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 mt-5">
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryCardList;
