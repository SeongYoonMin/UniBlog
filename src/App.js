import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Board from "./pages/board/Board";
import Main from "./pages/Main/Main";
import Visitor from "./pages/visitors/Visitor";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<Board />}/>
        <Route path="/Visitor" element={<Visitor />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
