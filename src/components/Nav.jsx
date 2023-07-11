import logo from "../images/gymMate.png";

const Nav = () => {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={logo} alt="" />
      </div>
      {!authToken && <button className="nav-btn">Log in</button>}
    </nav>
  );
};

export default Nav;
