import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { IProduct } from "../../interfaces/product.interfaces";
import StarIcon from "@mui/icons-material/Star";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={product.title}
          image={product.image}
          className="min-[320px]:max-[359px]:h-[100px] h-[150px] md:h-[178px] object-contain"
        />
        <CardContent className="p-2 sm:p-3">
          <Typography
            gutterBottom
            component="h3"
            className="min-[320px]:max-[359px]:text-[13px] min-[320px]:max-[359px]:leading-tight text-sm line-clamp-2 min-[320px]:max-[359px]:h-[32px] h-[40px]"
          >
            {product.title}
          </Typography>
          <Typography
            gutterBottom
            component="p"
            className="text-base font-bold"
          >
            $ {product.price}
          </Typography>
          <Typography
            gutterBottom
            component="p"
            className="text-sm flex items-center gap-1"
          >
            <StarIcon className="text-yellow-500 text-lg" />
            <span className="h-[18px]">{product.rating.rate}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
