import React, { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState("");

  const LIMITE_MAX = 10;
  const LIMITE_MIN = -10;

  const somar = () => {
    if (contador >= LIMITE_MAX) {
      setMensagem("Você clicou muitas vezes");
      return;
    }
    setContador(contador + 1);
    setMensagem("");
  };

  const subtrair = () => {
    if (contador <= LIMITE_MIN) {
      setMensagem("Você clicou muitas vezes");
      return;
    }
    setContador(contador - 1);
    setMensagem("");
  };

  const zerar = () => {
    setContador(0);
    setMensagem("");
  };

  const getCor = () => {
    if (contador > 0) return "green";
    if (contador < 0) return "red";
    return "black";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1 style={{ color: getCor() }}>{contador}</h1>

      <button onClick={somar}>Somar +1</button>

      <button onClick={subtrair} style={{ marginLeft: "10px" }}>
        Subtrair -1
      </button>

      <button onClick={zerar} style={{ marginLeft: "10px" }}>
        Zerar
      </button>

      {mensagem && (
        <p style={{ color: "orange", marginTop: "20px" }}>
          {mensagem}
        </p>
      )}
    </div>
  );
}


// Guilherme Duarte e Enzo Gabriel//