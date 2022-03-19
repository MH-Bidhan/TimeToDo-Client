import { connect } from "react-redux";
import { changeCurrentTheme } from "./services/redux/theme/theme.action";

function App({ changeCurrentTheme, theme }) {
  document.body.className = theme.darkTheme ? "dark" : "";
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Hello</h2>
      <h3>Hello</h3>
      <h4>Hello</h4>
      This HTML file is a template. If you open it directly in the browser, you
      will see an empty page. You can add webfonts, meta tags, or analytics to
      this file. The build step will place the bundled scripts into the tag. To
      begin the development, run `npm start` or `yarn start`. To create a
      production bundle, use `npm run build` or `yarn build`.
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
