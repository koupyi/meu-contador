import React from "react";
import Contador from "./contador";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1
        style={{
          color: "#333",
          fontSize: "32px",
          marginBottom: "20px",
        }}
      >
        Hector e Matheus Portela
      </h1>

      <Contador />
    </div>
  );
}

export default App;
