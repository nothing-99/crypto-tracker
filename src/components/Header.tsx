import styled from "styled-components";
import { IProps } from "../types";

export default function Header({ children }: IProps) {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
}
const Container = styled.header`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  padding: 1rem 0;
  color: ${(props) => props.theme.accentColor};
`;
