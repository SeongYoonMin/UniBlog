import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Board from "./pages/board/Board";
import CreateBoard from "./pages/board/CreateBoard";
import Main from "./pages/Main/Main";
import Visitor from "./pages/visitors/Visitor";


function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/board" element={<Board />}/>
          <Route path="/visitor" element={<Visitor />}/>
          <Route path="/createboard" element={<CreateBoard />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
