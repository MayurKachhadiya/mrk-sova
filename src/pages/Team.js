import React from 'react'
import features from "../Images/features.jpg";

const Team = () => {
  return (
    <>
        <section className="section " id="team">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6">
                    <div className="bg-light p-2 rounded shadow">
                        <img className="img-fluid rounded" src={features} alt="features"/>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 mt-sm-0 pt-sm-0">
                    <div className="ms-lg-5">
                        <div className="section-title">
                            <h6 className="text-success fw-normal">- Our expert</h6>
                            <h2 className="heading"><span className="text-success">Jack Murry</span> - CEO and <br/> co-founder
                                of this <br/> consulting
                            </h2>

                            <p className="text-muted mb-0">Various versions have evolved over the years, sometimes by
                                accident<br/> excepteur sint occaecat cupidatat non proident over the years.</p>
                        </div>

                        <ul className="list list-unstyled mb-0 ps-0 mt-3">
                            <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                    <i className="uil uil-check-circle align-middle"></i></span>Product engineering
                            </li>
                            <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                    <i className="uil uil-check-circle align-middle"></i></span>Consulting & advisory</li>
                            <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                    <i className="uil uil-check-circle align-middle"></i></span>Technology services</li>
                            <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                    <i className="uil uil-check-circle align-middle"></i></span>Business consultation
                            </li>
                            <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                    <i className="uil uil-check-circle align-middle"></i></span>Digital solution </li>
                        </ul>

                        <div className="button mt-4">
                            <a href="#About" className="btn pill btn-success rounded-pill">About</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Team;
