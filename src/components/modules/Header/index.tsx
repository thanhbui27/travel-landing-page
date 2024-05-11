import Button from "@/components/common/Button/Button";
import { HeaderContainer } from "./styles";
import { ReactComponent as LogoPage } from "@/assets/logo/logo.svg";
import { TTypeColor } from "@/types/common/buttonType";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <LogoPage />
        <nav>
          <ul>
            <li>
              <Link className="active" to={"#"}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"#"}>Discover</Link>
            </li>
            <li>
              <Link to={"#"}> Special Deals</Link>
            </li>
            <li>
              <Link to={"#"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="button-action">
          <Button text="Login" bgColor={TTypeColor.WHITE} />
          <Button text="Sign In" bgColor={TTypeColor.INDIGO} />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
