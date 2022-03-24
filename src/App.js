import "./App.css";
import styled from "styled-components";
import SigninBox from "./components/SigninBox";
import MyRoutes from "./router/MyRoutes";

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function App() {
    return (
        <AppContainer>
            <MyRoutes />
        </AppContainer>
    );
}

export default App;
