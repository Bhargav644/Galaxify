import { TextStyle, container, ring1, ring2 } from "../styles";

function Logo() {
  return (
    <div className={container}>
      <div className={ring1}></div>
      <div className={ring2}></div>
      <div className="planet"></div>
      <div className={TextStyle}>GALAXIFY</div>
    </div>
  );
}

export default Logo;
