import bgImg from "../assets/about-hero.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about">
      <img src={bgImg} alt="about-img" />
      <div className="about-description">
        <h1>Dont squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉).
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="card">
          <p> Your destination is waiting.</p>
          <p> Your van is ready</p>
          <button>
            <Link to="/vans">Explore our Vans</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
