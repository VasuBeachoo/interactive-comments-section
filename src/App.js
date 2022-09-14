import { useSelector } from "react-redux";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import CommentSection from "./components/CommentSection";
import DeletePopup from "./components/DeletePopup";

const PopupBox = styled.div`
  position: fixed;
  top: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.5;
`;

const AppBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  padding: 3.5rem 2rem;
`;

const App = () => {
  const popupType = useSelector((state) => state.comments.popupType);

  const displayPopup = () => {
    switch (popupType) {
      case "delete":
        return <DeletePopup />;
      default:
        return <></>;
    }
  };

  return (
    <AppBox>
      <GlobalStyle />
      <CommentSection />
      {popupType !== "" && (
        <>
          <DarkOverlay />
          <PopupBox>{displayPopup()}</PopupBox>
        </>
      )}
    </AppBox>
  );
};

export default App;
