import styled from "styled-components";
import { IOverviewProps } from "../types";

export default function Overview({ info, price }: IOverviewProps) {
  return (
    <>
      <OverviewContainer>
        <OverviewItem>
          <span>rank</span>
          <span>{info?.rank}</span>
        </OverviewItem>
        <OverviewItem>
          <span>symbol</span>
          <span>{info?.symbol}</span>
        </OverviewItem>
        <OverviewItem>
          <span>price</span>
          <span>{`$ ${price?.quotes.USD.price.toFixed(0)}`}</span>
        </OverviewItem>
      </OverviewContainer>
      <Description>{info?.description}</Description>
      <OverviewContainer>
        <OverviewItem>
          <span>total supply</span>
          <span>{price?.total_supply}</span>
        </OverviewItem>
        <OverviewItem>
          <span>max supply</span>
          <span>{price?.max_supply}</span>
        </OverviewItem>
      </OverviewContainer>
    </>
  );
}

const OverviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
  margin-top: 0.4em;
  box-shadow: 0 0 8px ${(props) => props.theme.shadowColor};
  background-color: ${(props) => props.theme.cardBgColor};
  border-radius: 0.5rem;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    text-transform: uppercase;
  }
  span:first-child {
    font-size: 0.7rem;
    font-weight: 400;
    display: block;
    margin-bottom: 0.5rem;
  }
`;
const Description = styled.p`
  margin: 2rem 0;
  line-height: 1.5rem;
`;
