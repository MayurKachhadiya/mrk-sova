import React from 'react'

const Section = () => {
  return (
    <>
      <section className="section abc">
        <div className="bg-overlay bg-gradient" style={{opacity: 0.7}}>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-3 pb-2">
                        <h6 className="text-white-50 text-center fw-normal">- More Updates -</h6>
                        <h4 className="text-white title mt-3 fw-normal">Sign Up for Updates,<br/>Get Subscribed Today! </h4>
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="text-center subcribe-form mt-3 pt-2">
                        <form className="mx-auto">
                            <div className="input-group mb-0">
                                <input name="email" id="email1" type="email" className="form-control pill" placeholder="Enter Your Email..."/>
                                <button type="submit" className="btn pill btn-success">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Section;
