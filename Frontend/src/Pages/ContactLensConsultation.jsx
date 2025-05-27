import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactLensConsultation = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div data-aos="fade-down" className="text-center mb-5">
          <h2 className="fw-bold text-primary">Contact Lens Consultation</h2>
        </div>
        <div className="row justify-content-center" data-aos="zoom-in">
          <div className="col-lg-10">
            <div className="card border-0 shadow rounded-4 p-4 bg-white">
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                If you are interested in trying contact lenses or having a check on your existing lenses, then a thorough test for this follows the eye examination.
                More measurements of the front of the eye are taken, and more tests of the external eye are done which include a dry eye test and yellow dye test.
                Trial contact lenses are put in the eye and the vision is tested.
                A teach on how to put the lenses in the eye and how to take them out is carried out.
                A printed copy of your contact lens specification is given.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLensConsultation;