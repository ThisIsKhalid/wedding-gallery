import React from "react";
import footerImg from "../../Assets/footer (1).jpg";
import "./Home.css";
import ImportantToUs from "./ImportantToUs";
import ServicOptions from "./ServicOptions";
import WeddingPortfolio from "./WeddingPortfolio";

const Home = () => {
  return (
    <section>
      <ServicOptions></ServicOptions>
      <WeddingPortfolio></WeddingPortfolio>
      <ImportantToUs></ImportantToUs>
      <div className="mt-5 bg_img pb-3 px-2">
        <img className="img-fluid" src={footerImg} alt="" />
        <div className="container text-center mt-4 lg-px-3">
          <h4>Professional Wedding Photographer in Patna</h4>
          <p>
            If you are searching for a professional wedding photographer in
            Patna then FANTASTIC FOTO provide best wedding photography services
            by their experienced photographers.We capture instant funny
            memorable moment Which you have missed in the commotion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
