import { useState, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";

export const LogingedContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.getItem("nickname") != null
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);

    console.log("App useEffect isLoggeedIn = ", isLoggedIn);
  });

  const handleLoggedChange = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
  };

  return (
    <LogingedContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLoggedChange: handleLoggedChange }}
    >
      <div>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
      </div>
    </LogingedContext.Provider>
  );
}

export default App;
