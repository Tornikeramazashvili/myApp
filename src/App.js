import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Navbar/About/About";
import Home from "./Components/Navbar/Home/Home";
import Ideas from "./Components/Navbar/Ideas/Ideas";
import Quiz from "./Components/Navbar/Quiz/Quiz";
import { AnimatedSwitch } from "react-router-transition";

function App() {
  return (
    <>
      <Navbar />
      <AnimatedSwitch
        atEnter={routeAnimation.atEnter}
        atLeave={routeAnimation.atLeave}
        atActive={routeAnimation.atActive}
        mapStyles={mapStyles}
        className="switch-wrapper"
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/ideas" component={Ideas} />
        <Route exact path="/quiz" component={Quiz} />
      </AnimatedSwitch>
    </>
  );
}

const routeAnimation = {
  atEnter: {
    opacity: 0,
    translateX: -100,
  },
  atLeave: {
    opacity: 0,
    translateX: 100,
  },
  atActive: {
    opacity: 1,
    translateX: 0,
  },
};

const mapStyles = (styles) => {
  return {
    opacity: styles.opacity,
    transform: `translateX(${styles.translateX}px)`,
  };
};

export default App;
