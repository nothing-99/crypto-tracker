import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkState } from "../states/atoms";

export default function HeaderBar() {
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const handleClickTheme = () => setIsDark((current) => !current);
  return (
    <Container>
      <div>
        <Link to="/">
          <i className="fa-brands fa-bitcoin"></i>
        </Link>
      </div>
      <button onClick={handleClickTheme}>
        {isDark ? (
          <i className="fa-regular fa-sun"></i>
        ) : (
          <i className="fa-regular fa-moon"></i>
        )}
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  i {
    font-size: 1.3rem;
    color: ${(props) => props.theme.textColor};
  }
  button {
    border: none;
    background: transparent;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
