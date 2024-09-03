import * as React from "react";
import CategoryCard from "./CategoryCard";
import { ICategory } from "../../interfaces/category.interfaces";
import { Card, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface CategoryCardListProps {
  categories: ICategory[];
  loading: boolean;
}

const CategoryCardList: React.FC<CategoryCardListProps> = ({
  categories,
  loading,
}) => {
  if (loading) {
    return (
      <Grid container spacing={{ xs: 1, sm: 2 }} className="mt-5">
        {Array.from(Array(4)).map((_, index) => (
          <Grid size={{ xs: 6, md: 3 }} key={index}>
            <Card className="flex gap-2 justify-between p-2">
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="rounded" width={40} height={40} />
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 mt-5">
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryCardList;
