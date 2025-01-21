import React, { useState } from "react";

const PaymentFooter = () => {
  const [currency, setCurrency] = useState("CNY"); // Default to CNY
  const total = currency === "CNY" ? "¥2100" : "$299"; // Example total
  // const fee = currency === "CNY" ? "0" : "3%"; // Example fee

  const handleCurrencySwitch = (selectedCurrency) => {
    setCurrency(selectedCurrency);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Currency Switcher */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <button
          onClick={() => handleCurrencySwitch("USD")}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            backgroundColor: currency === "USD" ? "#d7e3fc" : "#f7f9ff",
            color: currency === "USD" ? "#2979ff" : "#757575",
            fontWeight: currency === "USD" ? "bold" : "normal",
          }}
        >
          USD
        </button>
        <button
          onClick={() => handleCurrencySwitch("CNY")}
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            backgroundColor: currency === "CNY" ? "#d7e3fc" : "#f7f9ff",
            color: currency === "CNY" ? "#2979ff" : "#757575",
            fontWeight: currency === "CNY" ? "bold" : "normal",
          }}
        >
          CNY
        </button>
      </div>

      {/* Total and Fee */}
      <div style={{ display: "flex", flexDirection: "column", textAlign: "right" }}>
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>合计: {total}</span>
        {/* <span style={{ fontSize: "12px", color: "#757575" }}>
          含手续费: {fee}
        </span> */}
      </div>
    </div>
  );
};

export default PaymentFooter;