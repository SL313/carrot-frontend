import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";

type TradeInformationType = {
  title: string;
  location: string;
  price: number;
  createdAt: Date;
  updatedAt?: Date;
};

const TradeInformation = (information: TradeInformationType): JSX.Element => {
  const { title, location, price, createdAt, updatedAt } = information;
  const date = updatedAt != null ? moment(updatedAt) : moment(createdAt);
  const displayDate = date.format("YYYY-MM-DD HH:mm");

  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1" style={{ color: "rgba(0, 0, 0, 0.5)" }}>
        {location}
        {displayDate}
      </Typography>
      <Typography variant="subtitle1">
        <strong>{price}원</strong>
      </Typography>
    </Box>
  );
};
export default TradeInformation;
