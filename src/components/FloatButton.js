import React, { Component } from "react";
import { Button } from "react-mdl";
import "./../App.css";

export class FloatButton extends Component {
  render() {
    return (
      <>
        {/* WeChat Floating Button */}
        <div className="wechat-floating">
          <Button onClick={() => alert("Opening WeChat QR Code")}>
            <a href="mailto:svcodingcamp@gmail.com" title="Wechat" className="">
              <i
                className="fa fa-wechat wechat-floating-i"
                aria-hidden="true"
              ></i>
            </a>
          </Button>
        </div>
      </>
    );
  }
}

export default FloatButton;
