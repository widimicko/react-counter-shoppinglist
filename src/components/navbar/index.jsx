import shoppingIcon from "../../image/shopping-icon.svg";

import "./style.css";

function Navbar() {
  return (
    <nav className="nav">
      <img src={shoppingIcon} alt="" className="nav-icon" />
      <h1 className="nav-title">Shopping List</h1>
    </nav>
  );
}

export default Navbar;
