import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DispensingOfEyeglasses = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div data-aos="fade-down" className="text-center mb-5">
          <h2 className="fw-bold text-primary">Dispensing of Eye Glasses</h2>
        </div>
        <div className="row justify-content-center" data-aos="zoom-in">
          <div className="col-lg-10">
            <div className="card border-0 shadow rounded-4 p-4 bg-white">
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Following your eye examination, our experienced staff will help you choose the right spectacles that suit your prescription and face. There is a selection of over 500 frames in our collection. If you choose to have yourself photographed to see how you look with the spectacles, then that option is also available. The qualified dispensing optician will then double check on your choice and take the final measurements to make your glasses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DispensingOfEyeglasses;