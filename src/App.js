import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("blue");
  const green = () => {
    setColor("green");
  };
  // color değişkeninin değeri green ise, setTimeout fonksiyonu ile rengin bir saniye sonra tekrar mavi olmasını sağlıyoruz.
  useEffect(() => {
    if (color === "green") {
      setTimeout(() => {
        setColor("blue");
      }, 1000);
    }
  }, [color]);
  return (
    <div>
      <div style={{ color }}>
        <h1>Rengi ayarlamak için butona tıklayın</h1>
        <button style={{ fontSize: "20px" }} onClick={green}>
          Set color
        </button>
      </div>
    </div>
  );
}
