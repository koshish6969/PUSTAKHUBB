import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section id="footer">
    <div className="main-footer">
        <div className="footer_contents">
          {/* Column1 */}
          <div className="col_one">
            <h1 className="footer_title">PustakHub</h1>
          </div>
          {/* Column2 */}
          <div className="col_two">
            <h4>Contact Us</h4>
            <ui className="list-unstyled">
              <li>+977-9811112390</li>
              <li>contact@pustakhub.com</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col_three">
            <h4>Follow Us</h4>
            <ui className="list-unstyled">
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ui>
          </div>
          </div>
    <hr/>
        <div className="footer_end">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} PustakHub | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
      </section>
  );
}

export default Footer;