import React from "react";
import "./Activities.css";
import icon from "../../images/arrow.svg";

const Activities = () => {
  return (
    <>
      <section className="what">
        <div className="activity">
          <div className="we do">
            <h4>What do we sell?</h4>
            <p>
              We promote the learning of INTERNATIONAL LANGUAGES AND INDIGENOUS
              LANGUAGES
            </p>
          </div>
          <div className="we done">
            <h5>
              <strong>INTERNATIONAL LANGUAGES:</strong>
              <br />
              FRENCH, GERMAN, SPANISH AND CHINESE
              <br />
              -For business, education or leisure purposes
            </h5>
            <h6>
              <strong>
                INDIGENOUS LANGUAGES: YORUBA, IGBO
                <br />
                AND HAUSA
              </strong>
              <br />
              Learning indigenous language helps the learner
              <br />
              to connect to n s or her root
            </h6>
          </div>
          <div className="we through">
            <h6>
              <strong>OUR VIRTUAL CLASS</strong>
              <br />
              STUDENTS LEARN FROM THE COMFORT OF THEIR HOMES
              <br />
              Our online education platform is a fully functional learning
              place, it is simple, unique and interactive.
              <br />
              Our teachers are extremely highly rated
            </h6>
            <button className="button1">Learn More</button>
          </div>
        </div>
      </section>

      <section className="ready">
        <div className="start">
          <h4>Ready to start a journey with us?</h4>
          <button className="apply">
            Apply Online
            <img src={icon} alt="arrow" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Activities;
