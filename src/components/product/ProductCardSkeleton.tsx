import {
  Card,
  CardActionArea,
  CardContent,
  Skeleton,
  Stack,
} from "@mui/material";

export default function ProductCardSkeleton() {
  return (
    <Card>
      <CardActionArea>
        <Skeleton
          variant="rectangular"
          className="min-[320px]:max-[359px]:h-[100px] h-[150px] md:h-[178px] object-contain"
        />
        <CardContent className="p-2 sm:p-3">
          <Skeleton
            variant="text"
            className="min-[320px]:max-[359px]:text-[13px] min-[320px]:max-[359px]:leading-tight text-sm line-clamp-2 min-[320px]:max-[359px]:h-[32px] h-[40px]"
          />
          <Skeleton variant="text" className="text-base font-bold w-20" />
          <Stack spacing={1} className="flex flex-row items-center gap-1 mt-2">
            <Skeleton
              variant="circular"
              width={20}
              height={20}
              className="mt-0"
            />
            <Skeleton
              variant="circular"
              width={20}
              height={20}
              className="mt-0"
            />
            <Skeleton
              variant="circular"
              width={20}
              height={20}
              className="mt-0"
            />
            <Skeleton
              variant="circular"
              width={20}
              height={20}
              className="mt-0"
            />
            <Skeleton
              variant="circular"
              width={20}
              height={20}
              className="mt-0"
            />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
