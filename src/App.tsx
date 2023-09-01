// import React, { useState } from "react";
import Router from "./Router";
import styled, { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { isLightAtom } from "./atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  font-weight: 300;
  background-color: ${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  font-family: 'Source Sans 3', sans-serif;
  line-height:1.2;
  }
a{
  text-decoration: none;
  color:inherit;
}
`;

const Toggle = styled.div`
  right: 20px;
  bottom: 20px;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  display: flex;
  position: fixed;
  border-radius: 20%;
  margin: 10px;
  background-color: ${(props) => props.theme.divColor};
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.activeColor};
    color: ${(props) => props.theme.bgColor};
  }
`;

function App() {
  const isLight = useRecoilValue(isLightAtom);
  const setLightAtom = useSetRecoilState(isLightAtom);
  const toggleTheme = () => setLightAtom((prev) => !prev);

  return (
    <>
      <ThemeProvider theme={isLight ? darkTheme : lightTheme}>
        <Toggle onClick={toggleTheme}>{isLight ? "Light" : "Dark"} mode</Toggle>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
