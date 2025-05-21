import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FreeEyeTestService = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold text-primary">Free Eye Test</h2>
          <p className="lead text-muted">Check your eligibility for a free NHS sight test</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="card border-0 shadow rounded-4 h-100 p-4 bg-white">
              <h5 className="text-info fw-bold mb-3">You qualify for a free NHS sight test if:</h5>
              <ul className="text-muted small" style={{ textAlign: 'justify' }}>
                <li>You're under 16</li>
                <li>You're under 19 and in full-time education</li>
                <li>You're 60 or over</li>
                <li>You claim benefits such as Universal Credit, Working Tax Credit, Pension Credit, Guarantee Credit, or Employment and Support Allowance.</li>
                <li>You're registered as blind or partially sighted</li>
                <li>You have diabetes or glaucoma</li>
                <li>
                  You're 40+ and a close relative has been diagnosed with glaucoma
                </li>
                <li>You've been advised by an ophthalmologist you're at risk of glaucoma</li>
                <li>You're a prisoner on leave from prison</li>
                <li>You're eligible for an NHS complex lens voucher</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="card border-0 shadow rounded-4 h-100 p-4 bg-white">
              <h5 className="text-info fw-bold mb-3">
                You're also entitled to free sight tests & help with glasses if:
              </h5>
              <ul className="text-muted small" style={{ textAlign: 'justify' }}>
                <li>You're under 16 or under 19 in full-time education</li>
                <li>You receive Pension Credit Guarantee Credit</li>
                <li>
                  You receive income-based Employment and Support Allowance
                </li>
                <li>You hold a valid NHS tax credit exemption certificate</li>
                <li>
                  You're named on a valid NHS certificate for full help with health costs (HC2)
                </li>
                <li>
                  If you're named on an HC3 certificate, partial help may still be available
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-5" data-aos="zoom-in">
          <div className="col-lg-10 mx-auto">
            <div className="card border-0 shadow rounded-4 p-4 bg-white">
              <h5 className="text-info fw-bold mb-3">Private Eye Tests Also Available</h5>
              <p className="text-muted" style={{ textAlign: 'justify' }}>
                We also offer  private eye examinations, new contact lens fitting consultations, and after-care services for contact lens wearers.
                Our eye examination also include the OCT.
              </p>
             
              <div className="text-center">
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

export default FreeEyeTestService;
