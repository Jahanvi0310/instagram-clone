import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Posts from "../components/Posts";
import { createContext } from "react";
import HomeStory from "../components/HomeStory";
import LightModeIcon from "@mui/icons-material/LightMode";
// import { Button } from "semantic-ui-css";
export const ThemeContext: React.Context<any> = createContext(null);
const Home = () => {
  const [theme, setTheme] = useState<string>("light");
  const toogleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <Header />
      <ThemeContext.Provider value={{ theme, toogleTheme }}>
        <Container id={theme}>
          <div className="icon">
            {/* <div className="bg-white center"> */}
            <LightModeIcon onClick={toogleTheme} className="bg-white" />
            {/* </div> */}
            <span className={theme === "light" ? "text-black" : "text-white"}>
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </span>
            {/* <input type="checkBox" onChange={toogleTheme} checked={theme==='dark'}/> */}
          </div>
          <Section>
            <HomeStory theme={theme} />
            <Posts />
          </Section>
        </Container>
      </ThemeContext.Provider>
    </>
  );
};
export default Home;
const Container = styled.div`
  display: grid;
  grid-coloumn: span1/span1;
  grid-template-coloumns: repeat(1, minmax(0, 1fr));
  @media (min-width: 1024px) {
    grid-template-coloumns: repeat(4, minmax(0, 1fr));
  }
`;
const Section = styled.div`
  grid-coloumn: span1/span1;
  @media (min-width: 1024px) {
    grid-coloumn: span3/span3;
    margin: 0 auto;
  }
`;
