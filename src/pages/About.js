import React from 'react'

const About = () => {
  return (
    <>
      <section className="section bg-light" id="about">
        <div className="container">
            <div className="row">
                <div className="col p-3">
                    <div className="section-title">

                        <h2 className="heading text-center fw-bold">Services</h2>
                        <p className="para-desc text-muted mb-0 mx-auto text-center">Various versions have evolved over the
                            years,
                            sometimes
                            by
                            accident excepteur sint occaecat cupidatat non proident over the years.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4 pt-2 mb-2">
                    <div className="features card">
                        <div className="card-body">
                            <div className="text">
                                <div className="icon">
                                    <i className="mdi mdi-human-male-board"></i>
                                </div>
                                <h5>Digital Solution</h5>
                                <p className="text-muted">On the other hand, we denounce with righteous indignation and
                                    dislike human nature.</p>
                                <a href="#About" className="link-success fs-6">More info</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4 pt-2 mb-2">
                    <div className="features card">
                        <div className="card-body">
                            <div className="text">
                                <div className="icon">
                                    <i className="uil uil-cell"></i>
                                </div>
                                <h5>Project Engineering</h5>
                                <p className="text-muted">On the other hand, we denounce with righteous indignation
                                    and dislike human nature.</p>
                                <a href="#About" className="link-success fs-6">More info </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4 pt-2 mb-2">
                    <div className="features card">
                        <div className="card-body">
                            <div className="text">
                                <div className="icon">
                                    <i className="mdi mdi-head-snowflake"></i>
                                </div>
                                <h5>Static Innovation</h5>
                                <p className="text-muted">On the other hand, we denounce with righteous indignation and
                                    dislike human nature.</p>
                                <a href="#About" className="link-success fs-6">More info </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About;
