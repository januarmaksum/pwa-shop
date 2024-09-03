import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Stack,
} from "@mui/material";
import { IProduct } from "../../interfaces/product.interfaces";

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
            ${product.price}
          </Typography>
          <Stack spacing={1} className="flex flex-row items-center gap-1">
            <Rating
              name="read-only"
              defaultValue={0}
              value={product.rating.rate}
              readOnly
              size="small"
            />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
