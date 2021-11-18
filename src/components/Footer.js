import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__divider">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="footer__info">
        <div className="footer__info-column">
          <h3 className="h3 h3--2">Our products</h3>
          <p className="p p--2"></p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p p--2">Copyright &copy; 2021 PML HOLIDAYS</p>
      </div>
    </footer>
  );
};

export default Footer;
