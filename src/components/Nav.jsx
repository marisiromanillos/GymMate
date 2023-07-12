const Nav = (props) => {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={"./gymMate.png"} alt="" />
      </div>
      {!props.authToken && <button className="nav-btn">Log in</button>}
    </nav>
  );
};

export default Nav;
