import { Link } from "react-router-dom";
import UserIcon from "../../assets/user";
import Logo from "./logo";
import { UserIconStyle,navRight } from "./styles";

function Navbar() {
  return (
    <div>
      <Logo />
      <div className={navRight}>
        <div className="navText">
          <Link className="link" to="/destinations">Explore</Link>
        </div>
        <div className="navText">
          <Link className="link" to="/quiz">Get Started</Link>
        </div>
        <UserIcon className={UserIconStyle} />
      </div>
    </div>
  );
}

export default Navbar;
