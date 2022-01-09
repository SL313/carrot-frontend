import { Avatar, Box, Typography, LinearProgress, Grid } from "@mui/material";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import { useEffect, useState } from "react";
import TradeAppBar from "./components/TradeAppBar";

type TradeItem = {
  id: string;
  image: string;
  title: string;
  description: string;
  location: string;
  createdAt: Date;
  updatedAt?: Date;
  price: number;
  chat?: number;
  isAdjustable: boolean;
};

const TradeItem = (): JSX.Element => {
  const [article, setArticle] = useState<TradeItem>();
  const getArticle = async () => {
    const { data } = await axios.get("http://localhost:5000/trade/articles/1");
    setArticle(data);
  };
  useEffect(() => {
    getArticle();
  }, []);

  return (
    <Box paddingTop="20px">
      <Grid container>
        <Grid item xs={1}>
          <Avatar src="" sx={{ width: 80, height: 80 }} />
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6">아이디</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">지역</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h6" color="primary">
                36.6°C
              </Typography>
              <LinearProgress
                variant="determinate"
                value={50}
                sx={{ height: 10, borderRadius: 5 }}
              />
            </Grid>
            <Grid item xs={4}>
              <SentimentSatisfiedIcon fontSize="large" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr />
      <Typography variant="h4">{article && article.title}</Typography>
      <Box>{article && article.description}</Box>
      {article && (
        <TradeAppBar
          price={article.price}
          isAdjustable={article.isAdjustable}
          isInterest={true}
        />
      )}
    </Box>
  );
};

export default TradeItem;
