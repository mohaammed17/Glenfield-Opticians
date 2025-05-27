import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SaleOfOpticalProduct = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div data-aos="fade-down" className="text-center mb-5">
          <h2 className="fw-bold text-primary">Sale of Optical Product</h2>
        </div>
        <div className="row justify-content-center" data-aos="zoom-in">
          <div className="col-lg-10">
            <div className="card border-0 shadow rounded-4 p-4 bg-white">
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                We have a selection of over 500 frame styles on display to choose from. These include options for Men, Women, and Children, available in Metal, Plastic, Semi Rimless, and Rimless styles. There is also a big selection of sunglasses.
                Our contact lenses vary from yearly conventional lenses to daily disposable lenses. We also offer Gas Permeable lenses.
                In addition, we sell accessories such as glasses cases, chains and cords, lens cleaning cloths and solutions, stick-on bifocals, ready readers, sunglass clip-ons, and various magnifiers. Contact lens accessories include contact lens cases, solutions, eye drops, and suction cups.
                Also available are prescription swimming goggles and other sports glasses. We have a range of prescription safety glasses in compliance with BS EN ISO 9001 and AS9100 registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleOfOpticalProduct;