import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import RootComponent from "./components/root/root.component";
import SigninPage from "./pages/sign-in/sign-in-page.component";
import SignUpPage from "./pages/sign-up/sign-up-page.component";
import { changeCurrentTheme } from "./services/redux/theme/theme.action";

function App({ changeCurrentTheme, theme }) {
  document.body.className = theme.darkTheme ? "dark" : "";
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<RootComponent />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>

      <button onClick={changeCurrentTheme} className="theme-button">
        theme
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentTheme: () => dispatch(changeCurrentTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
