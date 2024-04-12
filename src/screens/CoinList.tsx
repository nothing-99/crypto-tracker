import styled from "styled-components";
import { Link } from "react-router-dom";
import HeaderBar from "../components/HeaderBar";
import Header from "../components/Header";
import { useQuery } from "@tanstack/react-query";
import { ICoins } from "../types";
import { fetchCoins } from "../api";

export default function CoinList() {
  const { data: coins, isLoading } = useQuery<ICoins[]>({
    queryKey: ["coins"],
    queryFn: fetchCoins,
  });

  return (
    <Container>
      <HeaderBar />
      <Header>CoinList</Header>
      <main>
        {isLoading && <Loading>Loading...</Loading>}
        <CoinItems>
          {coins?.slice(0, 20).map((coin) => (
            <CoinItem key={coin.id}>
              <Link
                to={{
                  pathname: `${coin.id}`,
                  state: {
                    name: coin.name,
                  },
                }}>
                <img
                  src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                />
                <span>{coin.name}</span>
              </Link>
            </CoinItem>
          ))}
        </CoinItems>
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
    height: 80%;
    overflow: scroll;
    border-radius: 0.5rem;
  }
`;
const CoinItems = styled.ul`
  display: block;
  overflow: scroll;
  padding: 1rem 1rem;
`;
const CoinItem = styled.li`
  a {
    padding: 1rem 0.7rem;
    display: flex;
    align-items: center;
  }
  box-shadow: 0 0 8px ${(props) => props.theme.shadowColor};
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  img {
    margin-right: 0.7rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const Loading = styled.div``;
