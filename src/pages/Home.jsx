import Nav from "../components/Nav";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
  };

  return (
    <>
      <Nav />
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
