import { useNavigate } from "react-router-dom";
import classes from "./Landing.module.css";
import Hero from "../components/landing/Hero";
import WhyGithubMatters from "../components/landing/WhyGithubMatters";
import FivePillars from "../components/landing/FivePillars";
import HowToUse from "../components/landing/HowToUse";
import BeginnerGuide from "../components/landing/BeginnerGuide";
import CommonMistakes from "../components/landing/CommonMistakes";
import FinalCTA from "../components/landing/FinalCTA";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.landing}>
      <Hero onExplore={() => navigate("/explore")} />
      <WhyGithubMatters />
      <FivePillars />
      <HowToUse />
      <BeginnerGuide />
      <CommonMistakes />
      <FinalCTA onExplore={() => navigate("/explore")} />
    </div>
  );
};

export default Landing;
