import { BrowserRouter, Route, Switch } from "react-router-dom";
import CoinDetail from "./screens/CoinDetail";
import CoinList from "./screens/CoinList";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${import.meta.env.VITE_PUBLIC_URL}/:coinId`}>
          <CoinDetail />
        </Route>
        <Route path={`${import.meta.env.VITE_PUBLIC_URL}/`}>
          <CoinList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
