import React from 'react'
import hero from "../Images/hero4.jpg";

const Home = () => {
  return (
    <>
     <section className="bg-half-200 d-table w-100 " id="home">
        <div className="bg-overlay bg-success" style={{opacity:0.10}}></div>
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-7 col-md-6">
                    <div className="title-heading">
                        <h6 className="text-success fw-normal">- Consulting Agency -</h6>
                        <h3 className="heading mt-3"><span className="text-success">Award</span> Winning<br/>Consulting</h3>
                        <p className="text-muted mt-3 mb-0">Various versions have evolved over the years,
                            sometimes by accident<br/> excepteur sint occaecat cupidatat non proident over the years.</p>
                        <br/>
                        <div className="pt-2">
                            <a href="#about" className="btn btn-success rounded-pill">Our services</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 mb-0 pt-0">
                    <div className="image rounded-top rounded-pill shadow p-3">
                        <img className="img-fluid rounded-top rounded-pill" src={hero} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    <div class="position-relative">
        <div class="shape overflow-hidden text-light">
            <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
    </>
  )
}

export default Home;
