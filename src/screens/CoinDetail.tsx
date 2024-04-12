import {
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import {
  ICoinDetailParams,
  ICoinDetailState,
  ICoinInfo,
  ICoinPrice,
} from "../types";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";
import CoinPrice from "./CoinPrice";
import CoinChart from "./CoinChart";
import Header from "../components/Header";
import HeaderBar from "../components/HeaderBar";
import Overview from "../components/Overview";
import Tabs from "../components/Taps";

export default function CoinDetail() {
  const { state } = useLocation<ICoinDetailState>();
  const { coinId } = useParams<ICoinDetailParams>();
  const chartMatch = useRouteMatch(":coinId/chart");
  const priceMatch = useRouteMatch(":coinId/price");

  const { isLoading: infoLoading, data: info } = useQuery<ICoinInfo>({
    queryKey: ["info", coinId],
    queryFn: () => fetchCoinInfo(coinId),
  });
  const { isLoading: priceLoading, data: price } = useQuery<ICoinPrice>({
    queryKey: ["price", coinId],
    queryFn: () => fetchCoinPrice(coinId),
  });
  const isLoading = infoLoading || priceLoading;

  return (
    <Container>
      <HeaderBar />
      <Header>
        {state?.name ? state?.name : isLoading ? "...Loading" : info?.name}
      </Header>
      <main>
        {isLoading ? (
          "...Loading"
        ) : (
          <>
            <Overview
              info={info as ICoinInfo}
              price={price as ICoinPrice}
            />

            <Tabs
              coinId={coinId}
              isPriceMatch={!!priceMatch}
              isChartMatch={!!chartMatch}
            />

            {/* Route */}
            <Switch>
              <Route path="/:coinId/chart">
                <CoinChart coinId={`${coinId}`} />
              </Route>
              <Route path="/:coinId/price">
                <CoinPrice
                  coinId={`${coinId}`}
                  price={price as ICoinPrice}
                />
              </Route>
            </Switch>
          </>
        )}
      </main>
    </Container>
  );
}

const Container = styled.div`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  max-width: 400px;
  height: 900px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 20px 20px;
  box-shadow: 0 0 20px ${(props) => props.theme.shadowColor};
  main {
    overflow: scroll;
    border-radius: 0.5rem;
    padding: 0 0.4rem;
  }
  overflow: scroll;
`;
