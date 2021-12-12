import "./Home.css";
import Modal from "./Modal/Modal";
import Homebackground from "./HomeBackground.png";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-information-side">
          <div className="home-information-side-title-box">
            <h2 className="home-information-side-title">YOU MUST KNOW</h2>
          </div>
          <div className="home-information-side-description-box">
            <p className="home-information-side-description">
              Technology has the potential to be highly disruptive. It might
              also disrupt human society and the very meaning of human life in
              numerous ways, ranging from the creation of a global useless class
              to the rise of data colonialism and of digital dictatorships.
            </p>
          </div>
          <div className="home-information-side-description-button">
            <Modal />
          </div>
        </div>
        <div className="home-information-side-image-box">
          <img src={Homebackground} className="home-information-side-image" />
        </div>
      </div>
    </>
  );
};

export default Home;
