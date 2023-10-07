import UserIcon from "../../assets/user";
import Logo from "./logo";
import { UserIconStyle } from "./styles";

function Navbar() {
  return (
    <div>
      <Logo />
      <UserIcon className={UserIconStyle} />
    </div>
  );
}

export default Navbar;
