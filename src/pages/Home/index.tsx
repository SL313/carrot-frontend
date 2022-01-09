import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import { tradeItems } from "./data";
import TradeInformation from "./TradeInformation";
import TradeEvent from "./TradeEvent";
import axios from "axios";
import { useEffect, useState } from "react";

const ImageTheme = {
  width: "150px",
  height: "150px",
};

type TradeItem = {
  id: string;
  image: string;
  title: string;
  location: string;
  createdAt: Date;
  updatedAt?: Date;
  price: number;
  chat?: number;
  interest?: number;
};

const Home = (): JSX.Element => {
  const [tradeItems, setTradeItems] = useState<TradeItem[]>([]);
  const readArticles = async () => {
    const { data } = await axios.get("http://localhost:5000/trade/articles");
    setTradeItems(data);
  };
  useEffect(() => {
    readArticles();
  }, []);
  // 비어있는 배열을 두면, 페이지가 만들어질 때 딱 한 번만 실행시킬 수 있음
  return (
    <Box>
      <List>
        {tradeItems.map((item): JSX.Element => {
          return (
            <ListItem key={item.id}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar variant="rounded" src={item.image} sx={ImageTheme} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <TradeInformation
                      title={item.title}
                      location={item.location}
                      price={item.price}
                      createdAt={item.createdAt}
                      updatedAt={item.updatedAt}
                    />
                  }
                  secondary={
                    <TradeEvent chat={item.chat} interest={item.interest} />
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Home;
