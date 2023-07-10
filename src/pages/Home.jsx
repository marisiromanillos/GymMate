import Nav from "../components/Nav";

const Home = () => {
  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Nav />
      <div className="home">
        <h1>Find your Gym Mate</h1>
        <button className="primary-btn" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>
      </div>
    </>
  );
};

export default Home;
