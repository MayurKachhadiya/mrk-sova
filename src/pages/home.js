
import {React,useState} from "react";
import {HashLink as a} from 'react-router-hash-link'
import logodark from "../Images/logo-dark.png";
import hero from "../Images/hero4.jpg";
import features from "../Images/features.jpg";
import testing from "../Images/testimony1.jpg";
import testing2 from "../Images/testimony2.jpg";
import testing3 from "../Images/testimony3.jpg";
import testing4 from "../Images/testimony4.jpg";
import blog1 from "../Images/blog1.jpg";
import blog2 from "../Images/blog2.jpg";
import blog3 from "../Images/blog3.jpg";
import logo from "../Images/logo-light.png";
import "../Css/style.css";
import "../Css/style.css.map";
import "../Css/bootstrap.min.css";
import "../Css/materialdesignicons.min.css";
import "../Css/style.min.css";
import "../Css/testimonial.css";
import "../Css/testimonial.min.css";
import "../Css/tiny-slider.css";


const Home = ()=>{
    const [data, setData] = useState({
        Name: "",
        Email: "",
        Subject: "",
        Message: "",
    });

    const inputData = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);
        setData({...data, [name]:value });
    }
    
    const submitform = async(e) =>{
        e.preventDefault();
        const {Name , Email , Subject, Message} = data;
        if(Name && Email && Subject && Message){
            const res = fetch("https://mrkpay-default-rtdb.firebaseio.com/mrkpay.json",
            {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Name,
                    Email,
                    Subject,
                    Message,
                }),
            }
            );

            if (res) {
                setData({
                    Name: "",
                    Email: "",
                    Subject: "",
                    Message: "",
                });
                alert("Data Stored");
            }else{
                alert("Please Fill Data");
            }
        }else{
            alert("Please Fill Data");
        }
    };
    return(
        <>
        <div className="scroll">
            <nav id="navbar" className="navbar navbar-expand-lg navbar-expand-md fixed-top sticky">
        <div className="container">
            <a className="navbar-brand" href="/">
                <img src={logodark} alt=""/>
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="navbar-navlist">
                    <li className="nav-item">
                        <a className="nav-link scroll-behavior" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scroll-behavior" href="#about">About Us</a>
                        </li>
                    <li className="nav-item">
                        <a className="nav-link scroll-behavior" href="#team">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scroll-behavior" href="#price">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scroll-behavior" href="#blog">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scroll-behavior" href="#contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <section className="bg-half-200 d-table w-100" id="home">
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
    <div className="position-relative">
        <div className="shape overflow-hidden text-light">
            <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>

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

    <section className="section" id="team">
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
                                    <i className="uil uil-check-circle align-middle"></i></span>Product
                                engineering

                            </li>
                            <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                    <i className="uil uil-check-circle align-middle"></i></span>Consulting &
                                advisory
                            </li>
                            <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                    <i className="uil uil-check-circle align-middle"></i></span>Technology
                                services
                            </li>
                            <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                    <i className="uil uil-check-circle align-middle"></i></span>Business
                                consultation
                            </li>
                            <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                    <i className="uil uil-check-circle align-middle"></i></span>Digital solution
                            </li>
                        </ul>

                        <div className="button mt-4">
                            <a href="#About" className="btn pill btn-success rounded-pill">About</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section bg-light" id="testimony">
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h6 className="text-success text-center fw-normal">- Our clients -</h6>
                    <h3 className="heading text-center fw-bold">What patients say</h3>
                    <p className="text-muted text-center mb-0 text-center">Various versions have evolved over the years,
                        sometimes
                        by
                        accident<br/>excepteur sint occaecat cupidatat non proident.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mt-4 pt-2">
                    <div className="tiny-three-item">
                        <div className="tiny-slide">
                            <div className="rounded p-4 m-2 bg-white">
                                <div className="d-flex align-items-center ">
                                    <img className="img-fluid rounded-pill" src={testing} alt="testimony1"/>
                                    <div className="ms-3">
                                        <h5 className="title fs-6 mb-0">Amber koay</h5>
                                        <p className="text-success mb-0">Student</p>
                                    </div>
                                </div>
                                <p className="text-muted mt-3 mb-0">Lorem ipsum dolor sit amet consectetur
                                    sit adipisicing
                                    elit Optio
                                    amet dolores placeat voluptatum magnam.
                                </p>

                                <ul className="text-warning list-unstyled mt-3">
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                </ul>
                            </div>
                        </div>

                        <div className="tiny-slide">
                            <div className="rounded p-4 m-2 bg-white">
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid rounded-pill" src={testing2} alt="testimony2"/>
                                    <div className="ms-3">
                                        <h5 className="title fs-6 mb-0">Rachel Manon</h5>
                                        <p className="text-success mb-0">Housewife</p>
                                    </div>
                                </div>
                                <p className="text-muted mt-3 mb-0">Lorem ipsum dolor sit amet consectetur
                                    sit adipisicing elit Optio amet
                                    dolores placeat voluptatum magnam.</p>

                                <ul className="text-warning list-unstyled mt-3">
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="icon-content mdi mdi-star-outline"></i></li>
                                </ul>
                            </div>
                        </div>

                        <div className="tiny-slide">
                            <div className="rounded p-4 m-2 bg-white">
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid rounded-pill" src={testing3} alt="testimony3"/>
                                    <div className="ms-3">
                                        <h5 className="title fs-6 mb-0">John will</h5>
                                        <p className="text-success mb-0">Businessman</p>
                                    </div>
                                </div>
                                <p className="text-muted mt-3 mb-0">Lorem ipsum dolor sit amet consectetur
                                    sit adipisicing
                                    elit Optio amet
                                    dolores placeat voluptatum magnam.</p>
                                <ul className="text-warning list-unstyled mt-3">
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                </ul>
                            </div>
                        </div>

                        <div className="tiny-slide">
                            <div className="rounded p-4 m-2 bg-white">
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid rounded-pill" src={testing4} alt="testimony4"/>
                                    <div className="ms-3">
                                        <h5 className="title fs-6 mb-0">Achara Murry</h5>
                                        <p className="text-success mb-0">Teacher</p>
                                    </div>
                                </div>
                                <p className="text-muted mt-3 mb-0">Lorem ipsum, dolor sit amet consectetur
                                    sit adipisicing
                                    elit Optio amet
                                    dolores placeat voluptatum magnam.</p>

                                <ul className="text-warning list-unstyled mt-3">
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="icon-content mdi mdi-star-outline"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section">
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

    <section className="section bg-light" id="price">
        <div className="container">
            <div className="row">
                <div className="section-title mb-3">

                    <h2 className="heading text-center fw-bold">Pricing Plans</h2>
                    <p className="text-muted text-center mb-0">Various versions have evolved over the years, sometimes by
                        accident<br/>excepteur sint occaecat cupidatat non proident.</p>
                </div>
            </div>
            <div className="row">
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4 pt-2">
                    <div className="pricing card text-center">
                        <div className="card-body">
                            <h5 className="card-title">General session</h5>
                            <span className="text-success fw-bold fs-4">$100</span>
                            <hr/>
                            <div className="text-start">
                                <ul className="list list-unstyled mb-0 ps-0">
                                    <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                            <i className="uil uil-check-circle align-middle"></i></span>6 session/month
                                    </li>
                                    <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                            <i className="uil uil-check-circle align-middle"></i></span>Duration 30 minutes
                                    </li>
                                    <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                            <i className="uil uil-check-circle align-middle"></i></span>Consulting &
                                        Advisory
                                    </li>
                                    <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                            <i className="uil uil-check-circle align-middle"></i></span>Relationship Buildup
                                    </li>
                                    <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                            <i className="uil uil-check-circle align-middle"></i></span>Sales & Marketing
                                    </li>
                                </ul>
                            </div>
                            <div className="button text-center pt-4">
                                <a href="#price" className="btn btn-outline-success rounded-pill mt-3">Get plan
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4 pt-2">
                    <div className="pricing card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Standard session</h5>
                            <span className="text-success fw-bold fs-4">$200</span>
                            <hr/>
                            <div className="text-start">
                                <ul className="list list-unstyled mb-0 ps-0">
                                    <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                            <i className="uil uil-check-circle align-middle"></i></span>12 session/month
                                    </li>
                                    <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                            <i className="uil uil-check-circle align-middle"></i></span>Duration 30 minutes
                                    </li>
                                    <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                            <i className="uil uil-check-circle align-middle"></i></span>Consulting &
                                        Advisory</li>
                                    <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                            <i className="uil uil-check-circle align-middle"></i></span>Relationship Buildup
                                    </li>
                                    <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                            <i className="uil uil-check-circle align-middle"></i></span>Sales & Marketing
                                    </li>
                                </ul>
                            </div>
                            <div className="button text-center pt-4">
                                <a href="#price" className="btn btn-outline-success rounded-pill mt-3">Get plan</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4 pt-2">
                    <div className="pricing card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Individual session</h5>
                            <span className="text-success fw-bold fs-4">$300</span>
                            <hr/>
                            <div className="text-start">
                                <ul className="list list-unstyled mb-0 ps-0">
                                    <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                            <i className="uil uil-check-circle align-middle"></i></span>15 session/month
                                    </li>
                                    <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                            <i className="uil uil-check-circle align-middle"></i></span>Duration 30 minutes
                                    </li>
                                    <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                            <i className="uil uil-check-circle align-middle"></i></span>Consulting &
                                        Advisory</li>
                                    <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                            <i className="uil uil-check-circle align-middle"></i></span>Relationship Buildup
                                    </li>
                                    <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                            <i className="uil uil-check-circle align-middle"></i></span>Sales & Marketing
                                    </li>
                                </ul>
                            </div>
                            <div className="button text-center pt-4">
                                <a href="#price" className="btn btn-outline-success rounded-pill mt-3">Get plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section" id="blog">
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className="section-title d-inline-block p-2">
                        <h6 className="text-success text-center fw-normal">- blogs & news -</h6>
                        <h3 className="heading text-bold">Latest news articles</h3>
                        <p className="text-muted mb-0">Various versions have evolved over the years, sometimes by
                            accident<br/>excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4 pt-2">
                    <div className="article card">
                        <div className="card-body p-0">
                            <img className="img-fluid rounded mb-2" src={blog1} alt="blog1"/>
                            <div className="card-text">
                                <div className="hstack gap-2">
                                    <p className="text-muted fs-sm-6 ">06 June 2022</p>
                                    <div className="vr" style={{height:10}}></div>
                                    <p className="text-muted fs-sm-6">105 views</p>
                                    <div className="vr" style={{height:10}}></div>
                                    <p className="text-muted fs-sm-6">No comments</p>
                                </div>

                                <h6 className="title">Sales and marketing design and improvement stratagy</h6>
                                <p className="text-muted mb-0">Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                    amet consectetur adipisci velit, sed quia.</p>
                                <a href=" " className="link-success fs-6">Read more </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4 pt-2">
                    <div className="article card">
                        <div className="card-body p-0">
                            <img className="img-fluid rounded mb-2" src={blog2} alt="blog2"/>
                            <div className="card-text">
                                <div className="hstack gap-2">
                                    <p className="text-muted fs-sm-6">12 March 2022</p>
                                    <div className="vr" style={{height:10}}></div>
                                    <p className="text-muted fs-sm-6">79 views</p>
                                    <div className="vr" style={{height:10}}></div>
                                    <p className="text-muted fs-sm-6">No comments</p>
                                </div>
                                <h6 className="title">Business Counselling programs with unique stratagy</h6>
                                <p className="text-muted mb-0">Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                    amet
                                    consectetur adipisci velit sed quia.</p>
                                <a href=" " className="link-success fs-6">Read more </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col col-lg-4 col-md-6 col-sm-12 mt-4 pt-2">
                    <div className="article card">
                        <div className="card-body p-0">
                            <img className="img-fluid rounded mb-2" src={blog3} alt="blog3"/>

                            <div className="card-text">
                                <div className="hstack gap-2">
                                    <p className="text-muted fs-sm-6">20 March 2022</p>
                                    <div className="vr" style={{ height:10}} ></div>
                                    <p className="text-muted fs-sm-6">86 views</p>
                                    <div className="vr" style={{height:10 }}></div>
                                    <p className="text-muted fs-sm-6">No comments</p>
                                </div>

                                <h6 className="title">Evolving and program management techniques</h6>
                                <p className="text-muted mb-0">Neque porro quisquam est qui dolorem ipsum quia dolor sit
                                    amet
                                    consectetur adipisci velit sed quia.</p>,
                                <a href=" " className="link-success fs-6">Read more </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section bg-light" id="contact">
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="section-title">
                            <h3 className="heading text-bold">Contact us</h3>
                            <p className="text-muted mb-0">Various versions have evolved over the years, sometimes by
                                excepteur sint occaecat cupidatat non proident.</p>
                        </div>

                        <div className="form p-4 rounded bg-white">
                            <form method="post" id="myForm" name="myForm">
                                <p className="mb-0" id="error-msg"></p>
                                <div id="simple-msg"></div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <input name="Name" id="Name" value={data.Name} onChange={inputData} type="text" className="form-control"
                                                placeholder="Name :"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <input name="Email" id="Email2" value={data.Email} onChange={inputData} type="email" className="form-control"
                                                placeholder="Email :"/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-4">
                                            <input name="Subject" id="Subject" value={data.Subject} onChange={inputData} className="form-control"
                                                placeholder="Subject :"/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-4">
                                            <textarea name="Message" id="Message" value={data.Message} onChange={inputData} rows="4" className="form-control"
                                                placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button 
                                            type="submit" 
                                            className="btn btn-outline-success rounded-pill" 
                                            onClick={submitform}> 
                                            Submit 
                                        </button>
                    
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77499.72658982754!2d-79.40171002253008!3d43.79152093468001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1655895093676!5m2!1sen!2sin" title="anc"  height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer className="bg-footer footer-bar bg-black p-4">
        <div className="footer-py-30">

            <div className="row align-items-center text-center">
                <div className="col-sm-3">
                    <div className="text-sm-start">
                        <a href=" " className="logo-footer">
                            <img src={logo} alt=""/>
                        </a>
                    </div>
                </div>

                <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="text-center text-white">
                        <p className="mb-0">© <script>
                                document.write(new Date().getFullYear())
                            </script> Upstart. Design with <i className="mdi mdi-heart text-danger"></i> by <a
                                href="https://shreethemes.in/"  className="text-reset">Shreethemes</a>.
                        </p>
                    </div>
                </div>

                <div className="col-sm-3 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <ul className="list-unstyled social-icon foot-social-icon text-sm-end mb-0">
                        <li className="list-inline-item mb-0"><a href=" " className="rounded"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-facebook fea icon-sm fea-social text-white">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                    </path>
                                </svg></a></li>
                        <li className="list-inline-item mb-0"><a href=" " className="rounded"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-instagram fea icon-sm fea-social text-white">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg></a></li>
                        <li className="list-inline-item mb-0"><a href=" " className="rounded"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-twitter fea icon-sm fea-social text-white">
                                    <path
                                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                    </path>
                                </svg></a></li>
                        <li className="list-inline-item mb-0"><a href=" " className="rounded"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-linkedin fea icon-sm fea-social text-white">
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                    </path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg></a></li>
                    </ul>
                </div>
            </div>

        </div>
    </footer>
    </div>
        </>
        );
}

export default Home;