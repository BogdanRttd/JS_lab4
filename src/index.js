import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import New from "./New"
import Expenses from "./Expenses"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Expenses />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </BrowserRouter>
  </>
);
