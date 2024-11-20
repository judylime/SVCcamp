import React, { Component } from 'react';
import {
  Grid,
  Cell,
  List,
  ListItem,
  ListItemContent,
  FooterLinkList,
  Textfield,Icon
} from 'react-mdl';
import ContactFooter from '../components/ContactFooter';
import FloatButton from '../components/FloatButton';
import './../App.css';

export class Contact extends Component {
  render() {
    return (
      <div className=''>
          <Grid className='contact-grid'>
              <Cell col={12} className='contact-grid'>
                <br/>
                <h2>
                  Contact Us
                </h2>
                <hr />
                <div className='contact-list'></div>
              </Cell>
            <Cell col={6}>
              <div className="contact-option">
                <h3>1. 微信扫码咨询</h3>
                <img
                  src="wechat-qr-code.png" // Replace with the correct QR code path
                  alt="WeChat QR Code"
                  className="qr-code"
                />
                <p>扫描二维码联系课程顾问咨询</p>
              </div>
            </Cell> 
            <Cell col={6}>
              <div className="contact-option">
                <h3>2. 邮件发送简历咨询</h3>
                <img
                  src="email-icon.png" // Replace with your email icon path
                  alt="Email Icon"
                  className="email-icon"
                />
                <p>
                  请将个人简历发送至邮箱 <a href="mailto:test@gmail.com">test@gmail.com</a>
                </p>
                <p>我们将在收到邮件后 24 小时内与您联系，请关注邮箱状态。</p>
              </div>
            </Cell>
            {/* <Cell col={2}>
              <span style={{ background: 'lightgrey', width: '100%' }}>
                Ads<i class='fas fa-ad' size='5'></i>
              </span>
              <a
                target='new'
                href='https://click.linksynergy.com/fs-bin/click?id=SeAcEfxZlI4&offerid=311675.10000124&subid=0&type=4&LSNSUBSITE=LSNSUBSITE'
              >
                <img
                  border='0'
                  alt='Technology Used by Successwful Businesses'
                  src='https://ad.linksynergy.com/fs-bin/show?id=SeAcEfxZlI4&bids=311675.10000124&subid=0&type=4&gridnum=3'
                />
              </a>
            </Cell> */}
          </Grid>
        <FloatButton />
        <ContactFooter />
      </div>
    );
  }
}

export default Contact;
