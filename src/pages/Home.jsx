import Nav from "../components/Nav";

const Home = () => {
  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Nav logo={logo} authToken={authToken} />
      <div className="home">
        <h1 className="h1-home">Gym Mate</h1>
        <button className="primary-btn" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>
      </div>
    </>
  );
};

export default Home;
