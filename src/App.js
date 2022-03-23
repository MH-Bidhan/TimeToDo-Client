import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import RootComponent from "./components/root/root.component";
import SigninPage from "./pages/sign-in/sign-in-page.component";
import SignUpPage from "./pages/sign-up/sign-up-page.component";

export const ThemeContext = createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  document.body.className = darkTheme ? "dark" : "";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<RootComponent />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>

      <button onClick={() => setDarkTheme(!darkTheme)} className="theme-button">
        theme
      </button>
    </div>
  );
}

export default App;
