import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

// this is a object and isme joh props wagera hai woh alag kuch define hai in JSON toh this will not work kyu ki yeh react ke tree main convert nahi ho pata hai

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   Children: "Click me to visit google",
// };

// This below wala object is defined by tree structure toh yeh chalta hai

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit google
//   </a>
// );

// const ReactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "click me to visit google"
// );

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
