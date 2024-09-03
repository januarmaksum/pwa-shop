import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { ICategory } from "../../interfaces/category.interfaces";

interface CategoryCardProps {
  category: ICategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Card className="bg-indigo-600/10">
      <CardActionArea className="flex justify-between">
        <div className="flex flex-col">
          <CardContent className="h-[56px] md:h-[104px] flex items-center p-2 xl:p-4">
            <Typography component="h3" variant="h3" className="text-sm md:text-base lg:text-xl xl:text-2xl capitalize font-medium">
              {category.name}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          component="img"
          className="block h-auto object-contain w-[50px] md:w-[75px] lg:w-[100px]"
          image={category.image}
          alt={category.name}
        />
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
