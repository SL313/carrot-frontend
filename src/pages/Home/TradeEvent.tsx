import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type TradeEventType = {
  chat?: number;
  interest?: number;
};

const TradeEvent = (event: TradeEventType): JSX.Element => {
  const { chat, interest } = event;

  return (
    <Box display="flex" alignItems="center" justifyContent="right">
      {chat && (
        <>
          <ChatIcon />
          {chat}
        </>
      )}
      {interest && (
        <>
          <FavoriteBorderIcon />
          {interest}
        </>
      )}
    </Box>
  );
};

export default TradeEvent;
