import * as React from "react";
import CategoryCard from "./CategoryCard";
import { ICategory } from "../../interfaces/category.interfaces";
import CategoryCardSkeleton from "./CategoryCardSkeleton";

interface CategoryCardListProps {
  categories: ICategory[];
  isLoading: boolean;
}

const CategoryCardList: React.FC<CategoryCardListProps> = ({
  categories,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 mt-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <CategoryCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 mt-4">
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryCardList;
