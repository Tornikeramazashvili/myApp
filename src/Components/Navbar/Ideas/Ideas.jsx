import "./Ideas.css";
import IdeasBackground from "./IdeasBackground.jpg";

const Ideas = () => {
  return (
    <>
      <div className="ideas-container">
        <div className="ideas-information-side">
          <h3 className="ideas-information-title">
            Now we can talk about ideas
          </h3>
          <br />
          <p className="ideas-information-paragraph">
            As we enter the third decade of the twenty-first Century, humanity
            faces so many issues and questions, that it is really hard to know
            what to focus on. Old jobs will disappear, new jobs will emerge, but
            then the new jobs will rapidly change and vanish. Whereas in the
            past human had to struggle against exploitation, in the twenty-first
            century the really big struggle will be against irrelevance.
            <br />
            <br />
            Another issue is that If you know enough biology and have enough
            computing power and data, you can hack my body and my brain and my
            life, and you can understand me better than I understand myself. You
            know more about me than I know about myself. And you can do that not
            just to me, but to everyone.
            <br />
            <br />A system that understands us better than we understand
            ourselves can predict our feelings and decisions, can manipulate our
            feelings and decisions, and can ultimately make decisions for us.
            <br />
            <br />I think that things are clear now, you can go and click on{" "}
            <span className="ideas-information-paragraph-quiz">
              <a>quiz.</a>
            </span>
          </p>
        </div>
        <div className="ideas-image-box">
          <img
            src={IdeasBackground}
            className="about-image"
            className="ideas-image"
          />
        </div>
      </div>
    </>
  );
};

export default Ideas;
