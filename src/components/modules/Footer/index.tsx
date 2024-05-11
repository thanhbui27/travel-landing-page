import { FooterContainer } from "./style";
import { ReactComponent as LogoPage } from "@/assets/logo/logo.svg";
import { ReactComponent as Facebook } from "@/assets/icons/Group.svg";
import { ReactComponent as Instagram } from "@/assets/icons/Group 8.svg";
import { ReactComponent as Twitce } from "@/assets/icons/Group2.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="footer-column">
          <div className="footer-column-menu">
            <LogoPage />
          </div>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="footer-column-icon">
            <Facebook />
            <Instagram />
            <Twitce />
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-column-menu">
            <h4>Company</h4>
          </div>
          <ul>
            <li>About</li>
            <li>Career</li>
            <li>Mobile</li>
          </ul>
        </div>

        <div className="footer-column">
          <div className="footer-column-menu">
            <h4>Contact</h4>
          </div>
          <ul>
            <li>Why Travlog?</li>
            <li>Partner with us</li>
            <li>FAQ’s</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-column">
          <div className="footer-column-menu">
            <h4>Contact</h4>
          </div>
          <ul>
            <li>+00 92 1234 56789</li>
            <li>info@travlog.com</li>
            <li>205. R Street, New York BD23200</li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
