import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = "https://fakestoreapi.com";

axios.interceptors.request.use((request) => {
  console.log(request.url);
  return request;
});
axios.interceptors.response.use((response) => {
  return response.data;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
