import React from 'react';
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
        <div className="footer-top">
        <div className="footer-left">
          <ul>
            <li>Company</li>
            <hr></hr>
            <li>For Businesses</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Locations</li>
            <li>Privacy Policy</li>
          </ul>
         
        </div>
        <div className="footer-right">
          <ul>
            <li>Support</li>
            <hr></hr>
            <li>F.A.Q</li>
            <li>Customer Complaints</li>
            <li>Contact Us</li>
            <button className='footer-button'>Download App</button>
          </ul>
        </div>
      
        {/* <hr />
      <div className="footer-bottom">
        <span>BnB CashApp is a trademark of CSI-Club Südamerika International GmbH, a licensed payment institution established in Germany with registered address in Kaiserstrasse 69, 60329 Frankfurt Germany. CSI is authorized and regulated by BaFIN in Germany ( MTO License #....).</span>
        
      </div> */}
      </div>
      <div className='footer-bottom'>
        <hr />
        <span>BnB CashApp is a trademark of CSI-Club Südamerika International GmbH, a licensed payment institution established in Germany with registered address in Kaiserstrasse 69, 60329 Frankfurt Germany. CSI is authorized and regulated by BaFIN in Germany ( MTO License #....).</span><br></br> <br></br>
        <span>
        BnB CashApp is also a service of © BnB Transfer Corp., a licensed Money Remitter in Canada, Rep. of Guinea, Sierra Leone, and Liberia.
        </span>
        <br></br><br></br>
        <span>BnB Transfer Corp © 2020 — 2024</span>
        
      </div>
      
        </div>
    
    </footer>
  );
    
  
}

export default Footer