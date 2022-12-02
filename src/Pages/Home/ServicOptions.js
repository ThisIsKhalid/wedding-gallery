import React from "react";
import fashion from "../../Assets/fashion.jpg";
import preWedding from "../../Assets/pre-wedding.jpg";
import wedding from "../../Assets/wedding.jpg";

const ServicOptions = () => {
  return (
    <section>
      <div className="row container mx-auto my-5">
        <div className="col-12 col-lg-4">
          <img className="img-fluid" src={preWedding} alt="" />
          <h3 className="text-center mt-2">Pre Wedding</h3>
        </div>
        <div className="col-12 col-lg-4">
          <img className="img-fluid" src={wedding} alt="" />
          <h3 className="text-center mt-2">Wedding</h3>
        </div>
        <div className="col-12 col-lg-4">
          <img className="img-fluid" src={fashion} alt="" />
          <h3 className="text-center mt-2">Fashion</h3>
        </div>
      </div>
      <h3 className="text-center">Wedding Portfolio</h3>
    </section>
  );
};

export default ServicOptions;
