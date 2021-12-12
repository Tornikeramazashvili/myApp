import "./About.css";
import AboutBackground from "./AboutBackground.jpg";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-image-box">
          <img src={AboutBackground} className="about-image" />
        </div>
        <div className="about-information-side">
          <h3 className="about-information-title">
            Let's get to know each other
          </h3>
          <br />
          <p className="about-information-paragraph">
            I am a historian, philosopher and bestselling author of Sapiens: A
            Brief History of Humankind, Homo Deus: A Brief History of Tomorrow,
            21 Lessons for the 21st Century, and Sapiens: A Graphic History. My
            books have sold over 35 Million copies in 65 languages, and i am
            considered one of the world’s most influential public intellectuals
            today.
            <br />
            <br />I was born in Israel in 1976, received my PhD from the
            University of Oxford in 2002, and today i am a lecturer at the
            Department of History in the Hebrew University of Jerusalem. I and
            Itzik Yahav co-founded Sapienship: a social impact company with
            projects in the fields of entertainment and education. Sapienship’s
            main goal is to focus the public conversation on the most important
            global challenges facing the world today.
            <br />
            <br />
            As we already know each other, i want to talk to you about my ideas,
            click on{" "}
            <span className="about-information-paragraph-ideas">
              <a>Ideas.</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
