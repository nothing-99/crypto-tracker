import styled from "styled-components";
import { ITabsProps } from "../types";
import { Link } from "react-router-dom";

export default function Tabs({
  coinId,
  isPriceMatch,
  isChartMatch,
}: ITabsProps) {
  return (
    <TabsContainer>
      <Tab $isActive={isPriceMatch}>
        <Link to={`/${coinId}/price`}>Price</Link>
      </Tab>
      <Tab $isActive={!!isChartMatch}>
        <Link to={`/${coinId}/chart`}>Chart</Link>
      </Tab>
    </TabsContainer>
  );
}

const TabsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 1.2rem 0;
  gap: 2rem;
`;
const Tab = styled.span<{ $isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.cardBgColor};
  border-radius: 1rem;
  padding: 0.5rem 0;
  color: ${(props) =>
    props.$isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
  box-shadow: 0 0 8px ${(props) => props.theme.shadowColor};
`;
