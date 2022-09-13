import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import CommentSection from "./components/CommentSection";

const AppBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppBox>
      <GlobalStyle />
      <CommentSection />
    </AppBox>
  );
};

export default App;
