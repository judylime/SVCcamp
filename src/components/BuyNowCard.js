import React, { useState } from "react";
import { Button, Dialog, DialogContent, 
} from "react-mdl";
import PaymentMethods from "./PaymentMethods";
import PaymentFooter from "./PaymentFooter";
// import PaymentModal from "./PaymentModal";

const BuyNowCard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      {/* Buy Now Button */}
      <Button
        raised
        ripple
        style={{
          backgroundColor: "#ff5722",
          color: "#fff",
          fontWeight: "bold",
          marginTop: "10px",
        }}
        onClick={handleOpen}
      >
        立即购买
      </Button>

      {/* Payment Modal */}
      <Dialog open={open} onCancel={handleClose}         
      style={{
          width: "1000px", // Fixed width
          maxWidth: "95%", // For responsiveness
          height: "700px", // Fixed height
          borderRadius: "8px", // Rounded corners
          overflow: "hidden", // Ensure no overflow
        }}>
          {/* Close Button */}
          <Button
            ripple
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "transparent",
              border: "none",
              fontSize: "18px",
              color: "#757575",
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            ✕
          </Button>
        {/* <DialogTitle>支付方式</DialogTitle> */}
        <DialogContent>
          {/* <PaymentModal/> */}
            <PaymentMethods/>
            <PaymentFooter/>
            <Button
              raised
              ripple
              style={{
                backgroundColor: "#4caf50",
                color: "#fff",
                width: "100%",
              }}
              onClick={() => {
                // alert("支付成功！");
                handleClose();
              }}
            >
              完成
            </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BuyNowCard;