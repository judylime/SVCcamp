import React, { useState } from "react";

const PaymentModal = () => {
  const [selectedMethod, setSelectedMethod] = useState("Alipay");
  const [currency, setCurrency] = useState("CNY");

  const paymentMethods = [
    { id: "Alipay", label: "支付宝", icon: "🔵", qrCode: "Alipay QR" },
    { id: "WeChatPay", label: "微信支付", icon: "✅", qrCode: "WeChat QR" },
    { id: "ZellePay", label: "Zelle", icon: "🌐", qrCode: "Zelle QR" },
    { id: "VenmoPay", label: "Venmo", icon: "🌐", qrCode: "Venmo QR" },
  ];

  const total = currency === "CNY" ? "¥15176.7" : "$2200";
  const fee = currency === "CNY" ? "¥722.7" : "$105";

  return (
    <div
      style={{
        width: "600px", // Fixed width for the modal
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            onClick={() => setSelectedMethod(method.id)}
            style={{
              flex: "1",
              padding: "10px",
              borderRadius: "8px",
              border: selectedMethod === method.id ? "2px solid #ff6b6b" : "2px solid #e0e0e0",
              backgroundColor: selectedMethod === method.id ? "#fff5f5" : "#ffffff",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <span style={{ fontSize: "24px", display: "block" }}>{method.icon}</span>
            <span style={{ color: "#757575", fontSize: "14px" }}>{method.label}</span>
          </div>
        ))}
      </div>

      {/* QR Code Section */}
      <div
        style={{
          padding: "20px",
          borderRadius: "8px",
          border: "2px solid #e0e0e0",
          backgroundColor: "#f9f9f9",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h5 style={{ color: "#757575", marginBottom: "10px" }}>
          扫描二维码完成支付
        </h5>
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "#d7d7d7",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
            fontSize: "14px",
            color: "#757575",
          }}
        >
          {paymentMethods.find((method) => method.id === selectedMethod)?.qrCode}
        </div>
      </div>

      {/* Footer Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {/* Currency Switch */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => setCurrency("USD")}
            style={{
              padding: "5px 10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: currency === "USD" ? "#d7e3fc" : "#f7f9ff",
              color: currency === "USD" ? "#2979ff" : "#757575",
              fontWeight: currency === "USD" ? "bold" : "normal",
              cursor: "pointer",
            }}
          >
            USD
          </button>
          <button
            onClick={() => setCurrency("CNY")}
            style={{
              padding: "5px 10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: currency === "CNY" ? "#d7e3fc" : "#f7f9ff",
              color: currency === "CNY" ? "#2979ff" : "#757575",
              fontWeight: currency === "CNY" ? "bold" : "normal",
              cursor: "pointer",
            }}
          >
            CNY
          </button>
        </div>

        {/* Total and Fee */}
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "16px", fontWeight: "bold" }}>合计: {total}</div>
          <div style={{ fontSize: "12px", color: "#757575" }}>
            含手续费: {fee}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;