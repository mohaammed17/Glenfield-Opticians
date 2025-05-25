import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChildrenZone = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold text-primary">Children's Eye Care Service</h2>
          <p className="lead text-muted">Your child's eye health taken care of</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="card shadow border-0 rounded-4 p-4 h-100 bg-white">
              <h5 className="text-info fw-bold">Why Children’s Eye Care Matters</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                As most schools no longer offer Eye Tests, fewer children are having their eyes checked regularly. That's why we want to make it easy and affordable to ensure your child's eyes are being properly cared for.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Vision and learning are closely related. More than 80% of what children learn is through vision, so diagnosing problems early is extremely important to ensure that children of all ages reach their full academic potential.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                With 1 in 5 children having undetected eye problems, we recommend that every child's eyes should be checked at least once a year as part of their overall health regime.
              </p>
              <p className="text-success fw-semibold">
                Note: In the United Kingdom, all children aged under 16 and up to the age of 18 are entitled to a free eye test and a contribution towards glasses funded by the NHS.
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="card shadow border-0 rounded-4 p-4 h-100 bg-white">
              <h5 className="text-info fw-bold">Children’s Glasses & Lenses</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                All of our frames offer exceptional durability and comfort, not to mention features like sprung hinges and memory metals.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                Our collections are handpicked to include stylish designs from various brands, so your child feels confident wearing their glasses.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                All children’s lenses include scratch-resistant coating as standard. Based on their lifestyle or prescription, we may also recommend specialized lenses to enhance durability and comfort.
              </p>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                We also offer sports glasses and contact lenses for children.
              </p>
              <div className="text-center mt-3">
                <a href="/book-appointment" className="btn btn-primary px-4">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenZone;
