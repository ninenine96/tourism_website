import { Button, Button2 } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          VIEW PACKAGES
        </Button>
        <Button2
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          CONTACT US <i className="far fa-play-circle" />
        </Button2>
      </div>
    </div>
  );
}

export default HeroSection;
