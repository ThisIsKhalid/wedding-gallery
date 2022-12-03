import React from 'react';
import img1 from '../../Assets/DL5A1134-copy.jpg'
import img2 from '../../Assets/FOTO3926-copy.jpg'

const ImportantToUs = () => {
    return (
      <section className="bg_img p-2">
        <div className="row my-4 mx-5">
          <div className="col-md-7">
            <img className="img-fluid" src={img1} alt="" />
          </div>
          <div className="col-md-5">
            <div className="mb-5 mt-3 mt-md-0">
              <h4>What's most important to us?</h4>
              <p>
                To let your stories tell themselves through our images. We're
                always aiming for powerfully emotional, revealing, and narrative
                portraiture. Your wedding images are an heirloom that you will
                cherish and value your whole life, and we want to produce the
                most wonderful images for you.
              </p>
            </div>
            <img className="img-fluid" src={img2} alt="" />
          </div>
        </div>
      </section>
    );
};

export default ImportantToUs;