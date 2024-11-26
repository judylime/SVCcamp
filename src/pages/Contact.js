import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ContactFooter from "../components/ContactFooter";
import FloatButton from "../components/FloatButton";
import "./../App.css";

export class Contact extends Component {
  render() {
    return (
      <div className="">
        <Grid className="contact-grid">
          <Cell col={12} className="contact-grid">
            <br />
            <h2>Contact Us</h2>
            <hr />
            <div className="contact-list"></div>
          </Cell>
          <Cell col={6}>
            <div className="contact-option">
              <h3>1. 微信扫码咨询</h3>
              <i className="fa fa-wechat contact-wechat" aria-hidden="true"></i>
              <p>扫描二维码联系课程顾问咨询</p>
            </div>
          </Cell>
          <Cell col={6}>
            <div className="contact-option">
              <h3>2. 邮件发送简历咨询</h3>
              <i className="fa fa-envelope-square contact-env" aria-hidden="true"></i>
              <p>
                请将个人简历发送至邮箱{" "}
                <a href="mailto:svcodingcamp@gmail.com">svcodingcamp@gmail.com</a>
              </p>
              <p>我们将在收到邮件后 24 小时内与您联系，请关注邮箱状态。</p>
            </div>
          </Cell>
        </Grid>
        <FloatButton />
        <ContactFooter />
      </div>
    );
  }
}

export default Contact;
