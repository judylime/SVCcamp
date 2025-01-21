import React, { Component } from "react";
import { Button } from "react-mdl";
import wechatQRCode from "../image/QRCode.jpg"; // Adjust path to your QR code image

export class FloatButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQRCode: false,
    };
  }

  toggleQRCode = () => {
    this.setState((prevState) => ({
      showQRCode: !prevState.showQRCode,
    }));
  };

  render() {
    return (
      <>
        {/* WeChat Floating Button */}
        <div className="wechat-floating">
          <Button onClick={this.toggleQRCode}>
            <i
              className="fa fa-wechat wechat-floating-i"
              aria-hidden="true"
            ></i>
          </Button>
        </div>

        {/* QR Code Modal or Popup */}
        {this.state.showQRCode && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              zIndex: 1000,
            }}
          >
            <h4 style={{ color: "#fff" }}>扫描二维码添加微信</h4>
            <img
              src={wechatQRCode}
              alt="WeChat QR Code"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "8px",
                backgroundColor: "#fff",
              }}
            />
            <br />
            <Button
              raised
              ripple
              style={{
                marginTop: "10px",
                backgroundColor: "#ff5722",
                color: "#fff",
              }}
              onClick={this.toggleQRCode}
            >
              关闭
            </Button>
          </div>
        )}

        {/* Overlay to close modal when clicked outside */}
        {this.state.showQRCode && (
          <div
            onClick={this.toggleQRCode}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
          />
        )}
      </>
    );
  }
}

export default FloatButton;