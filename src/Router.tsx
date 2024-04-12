import { BrowserRouter, Route, Switch } from "react-router-dom";
import CoinDetail from "./screens/CoinDetail";
import CoinList from "./screens/CoinList";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <CoinDetail />
        </Route>
        <Route path="/">
          <CoinList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
