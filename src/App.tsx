import BottomAppBar from "./components/BottomAppBar";
import Home from "./pages/Home/index";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TradeDetail from "./pages/TradeDetail/index";

const App = (): JSX.Element => {
  return (
    <main>
      {/* <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>

      <Toolbar />
      <TradeDetail />
      <Toolbar /> */}
      <Home />

      {/* <BottomAppBar /> */}
    </main>
  );
};

export default App;

// git add *
// git commit -a -m "적을 메시지"
// git push origin master
