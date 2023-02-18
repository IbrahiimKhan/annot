import React from "react";
import "./index.css";
import Test from "./Annotations";
import image from "./images/fashion.avif"
import Annotation from "./Annotations";
import Annotations from "./Annotations";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Annotations img={image} />
    </div>
  );
}
