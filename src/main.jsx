import React from "react";
import ReactDOM from "react-dom/client";
import Background from "./Components/Background/Background.jsx";
import GlassmorphicCircle from "./Components/Glassmorphic Circle/Glassmorphic Circle.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Background />
    <GlassmorphicCircle />
  </React.StrictMode>
);
