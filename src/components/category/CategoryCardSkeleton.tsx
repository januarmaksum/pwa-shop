import Grid from "@mui/material/Grid2";
import { Card, Skeleton } from "@mui/material";

export default function CategoryCardSkeleton() {
  return (
    <Grid size={{ xs: 6, md: 3 }}>
      <Card className="flex gap-2 justify-between p-2">
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="rounded" width={40} height={40} />
      </Card>
    </Grid>
  );
}
