import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./pages/board/AboutMe";
import Main from "./pages/Main/Main";
import Portfolio from "./pages/visitors/Portfolio";


function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutme" element={<AboutMe />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
