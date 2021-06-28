import React from "react";
import './footer.scss';
function Footer (){
    return (
      <div color="blue" className="font-small pt-4 mt-4">
       <div className="footer-copyright text-center py-3">
        <div fluid>
          &copy; {new Date().getFullYear()} Copyright: 401-JavaScript
        </div>
      </div>
    </div>
    );
  }

export default Footer;  