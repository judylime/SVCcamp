import React, { useState } from "react";

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState("Alipay");

  const paymentOptions = [
    {
      id: "Alipay",
      label: "支付宝",
      icon: "🔵", // Replace with actual icon/image
      qrCode: "https://via.placeholder.com/150?text=Alipay+QR", // Replace with actual QR code URL
    },
    {
      id: "WeChatPay",
      label: "微信支付",
      icon: "✅", // Replace with actual icon/image
      qrCode: "https://via.placeholder.com/150?text=WeChatPay+QR", // Replace with actual QR code URL
    },
    // {
    //   id: "AntCreditPay",
    //   label: "花呗",
    //   icon: "🌐", // Replace with actual icon/image
    //   qrCode: "https://via.placeholder.com/150?text=AntCreditPay+QR", // Replace with actual QR code URL
    // },
    { 
      id: "ZellePay", 
      label: "Zelle", 
      icon: "🌐", 
      qrCode: "Zelle QR" 
    },
    { 
      id: "VenmoPay", 
      label: "Venmo", 
      icon: "🌐", 
      qrCode: "Venmo QR" 
    },
  ];

  const handleSelect = (id) => {
    setSelectedMethod(id);
  };

  const selectedQRCode = paymentOptions.find(
    (option) => option.id === selectedMethod
  )?.qrCode;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h4>支付方式</h4>
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        {paymentOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => handleSelect(option.id)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              border: `2px solid ${
                selectedMethod === option.id ? "#FF6B6B" : "#e0e0e0"
              }`,
              backgroundColor:
                selectedMethod === option.id ? "#FFF5F5" : "#ffffff",
              transition: "all 0.3s ease",
            }}
          >
            <span style={{ fontSize: "24px", marginRight: "8px" }}>
              {option.icon}
            </span>
            <span>{option.label}</span>
          </div>
        ))}
      </div>

      {/* QR Code Section */}
      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          padding: "20px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h4>扫描二维码完成支付</h4>
        <img
          src={selectedQRCode}
          alt="QR Code"
          style={{ width: "150px", height: "150px", marginTop: "10px" }}
        />
      </div>
    </div>
  );
};

export default PaymentMethods;