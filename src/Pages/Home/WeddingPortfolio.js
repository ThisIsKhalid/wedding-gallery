import React from "react";
import img1 from "../../Assets/p1.jpg";
import img2 from "../../Assets/p2.jpg";
import img3 from "../../Assets/p3.jpg";
import img4 from "../../Assets/p4.jpg";
import img5 from "../../Assets/p5.jpg";

const WeddingPortfolio = () => {
  return (
    <section className="bg_img py-4">
      <div className="container ">
        <h3 className="text-center">Wedding Portfolio</h3>
        <div className="row g-4">
          <div className="col-md-4">
            <img className="img-fluid" src={img1} alt="" />
          </div>
          <div className="col-md-8">
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <img className="img-fluid" src={img2} alt="" />
              </div>
              <div className="col-md-6">
                <img className="img-fluid" src={img3} alt="" />
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <img className="img-fluid" src={img4} alt="" />
              </div>
              <div className="col-md-6">
                <img className="img-fluid" src={img5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingPortfolio;
