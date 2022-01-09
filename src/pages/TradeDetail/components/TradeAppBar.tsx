import { AppBar, Toolbar, Grid, Typography, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type TradeType = {
  price: number;
  isAdjustable: boolean;
  isInterest: boolean;
};

const TradeAppBar = (props: TradeType): JSX.Element => {
  const { price, isAdjustable, isInterest } = props;
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0, backgroundColor: "#ffffff" }}
    >
      <Toolbar>
        <Grid container>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <FavoriteBorderIcon color="primary" fontSize="large" />
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h5" color="#2b2b2b">
                  <strong>5000원</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" color="#2b2b2b">
                  <strong>가격 제안 불가</strong>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
            <Button variant="contained" color="secondary" fullWidth>
              채팅으로 거래하기
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TradeAppBar;
