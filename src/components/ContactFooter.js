import React, { Component } from 'react';
import {
  FooterDropDownSection,
  Footer,
  FooterLinkList,
  FooterSection
} from 'react-mdl';
export class ContactFooter extends Component {
  render() {
    return (
      <div className='footer'>
        <Footer size='mega'>
          <FooterSection type="left" >
            <div className="qr-codes">
              <img src="qr-code-1.png" alt="Follow Us QR" className="qr-code" />
              <img src="qr-code-2.png" alt="Consultation QR" className="qr-code" />
            </div>    
          </FooterSection>
          <FooterSection type="middle" style={{ textAlign: 'right' }}>
            <FooterLinkList> 
              <div className="social-icons">       
                <a href='/Contact'>Contact Us</a>
                <br></br>
                <a
                  href='mailto:test@gmail.com'
                  title='Email'
                  className='contact-icons'
                >
                  <i
                    className='fa fa-envelope-square'
                    aria-hidden='true'
                  ></i>
                </a>
                <a
                  href='mailto:test@gmail.com'
                  title='Wechat'
                  className='contact-icons'
                >
                  <i
                    className='fa fa-wechat'
                    aria-hidden='true'
                  ></i>
                </a>
              </div>
              <p>SVCcamp ©2024 All rights reserved.</p>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </div>
    );
  }
}

export default ContactFooter;
