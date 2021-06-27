import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './footer.scss';
function Footer (){
    return (
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
       <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: 401-JavaScript
        </MDBContainer>
      </div>
    </MDBFooter>
    );
  }

export default Footer;  