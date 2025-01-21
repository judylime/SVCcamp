import React, { Component } from "react";
import { Footer, FooterLinkList, FooterSection } from "react-mdl";

export class ContactFooter extends Component {
  render() {
    return (
      <div className="footer">
        <Footer size="mega">
          <FooterSection type="left">
            <div className="qr-codes">
              {/* <img src="QRCode.jpg" alt="Follow Us QR" className="qr-code" /> */}
              {/* <img
                src={wechatQRCode}
                alt="Consultation QR"
                className="qr-code"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                }}
              /> */}
            </div>
            <FooterLinkList>
              <div className="social-icons">
                <a href="/Contact">Contact Us</a>
                <a
                  href="mailto:svcodingcamp@gmail.com"
                  title="Email"
                  className="contact-icons"
                >
                  <i className="fa fa-envelope-square" aria-hidden="true"></i>
                </a>
                {/* <a
                  href="mailto:svcodingcamp@gmail.com"
                  title="Wechat"
                  className="contact-icons"
                >
                  <i className="fa fa-wechat" aria-hidden="true"></i>
                </a> */}
              </div>
            </FooterLinkList>
          </FooterSection>
          <FooterSection type="middle" style={{ textAlign: "right" }}>
            <p>SVCcamp ©2024 All rights reserved.</p>
          </FooterSection>
        </Footer>
      </div>
    );
  }
}

export default ContactFooter;
