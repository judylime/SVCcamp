import React from "react";
import BuyNowCard from "./BuyNowCard";

const PromoCard = () => {
  return (
    <div
      style={{
        border: "1px solid #ff5722",
        borderRadius: "8px",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#fff7f0",
        // maxWidth: "400px",
        margin: "20px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Promotion Banner */}
      <div
        style={{
          backgroundColor: "#ff5722",
          color: "#fff",
          fontWeight: "bold",
          padding: "10px",
          borderRadius: "4px",
          marginBottom: "15px",
        }}
      >
         新年促销 
      </div>

      {/* Promotion Text */}
      <p style={{ fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}>
        购买任意两门算法课送{" "}
        <span style={{ color: "#ff5722" }}>$100</span>  Credit
      </p>

      {/* Call to Action */}
      {/* <BuyNowCard/> */}
    </div>
  );
};

export default PromoCard;