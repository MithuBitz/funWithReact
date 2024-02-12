import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// function MyApp() {
//   return <h2>Its just a function</h2>;
// }
//MyApp render like a function or like a jsx syntex like <MyApp />

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );
//anotherElement is render like a object

//const devName = "Mithu";
// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "Click here for google",
//    devName
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   reactElement
// );
