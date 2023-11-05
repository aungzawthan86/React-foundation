import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Count from "./Count";
import FigureList from "./Figure/FigureList";
import ToDoClass from "./ToDo/ToDoClass";
import { ToDoFunction } from "./ToDo/ToDoFunction";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Count />
    <FigureList />
    <ToDoClass />
    <ToDoFunction />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
