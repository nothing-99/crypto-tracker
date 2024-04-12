import { ThemeProvider, createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { Helmet } from "react-helmet-async";
import Router from "./Router";
import { useRecoilValue } from "recoil";
import { isDarkState } from "./states/atoms";
import { darkTheme, lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Noto Sans KR", "Nanum Gothic", sans-serif;
    width: 100vw;
    height: 90vh;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function App() {
  const isDark = useRecoilValue(isDarkState);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Helmet>
          <script
            src="https://kit.fontawesome.com/b94f781cfb.js"
            crossOrigin="anonymous"></script>
        </Helmet>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}
