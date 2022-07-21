// import React from 'react'
// import "../Css/tiny-slider.css";
// import "../Css/style.css";
// import testing1 from "../Images/testimony1.jpg";
// import testing2 from "../Images/testimony2.jpg";
// import testing3 from "../Images/testimony3.jpg";
// import testing4 from "../Images/testimony4.jpg";
// import Slider from "react-slick";

// const Testimony = () => {
//     const settings = {
//                 dots: true,
//               infinite: true,
//               slidesToShow: 3,
//               slidesToScroll: 1,
//               autoplay: true,
//               autoplaySpeed: 2000,
//               cssEase: "linear"
//               };
//   return (
//     <>
//         <section className="section bg-light" id="testimony">
//         <div className="container">
//             <div className="row">
//                 <div className="section-title">
//                     <h6 className="text-success text-center fw-normal">- Our clients -</h6>
//                     <h3 className="heading text-center fw-bold">What patients say</h3>
//                     <p className="text-muted text-center mb-0 text-center">Various versions have evolved over the years,
//                         sometimes
//                         by
//                         accident<br/>excepteur sint occaecat cupidatat non proident.</p>
//                 </div>
//             </div>
//             <div className="row">
//             <Slider {...settings}>
//             <div className="tiny-slide">
//                 <div className="col-12 mt-4 pt-2">
//                             <div className="rounded p-4 m-2 bg-white">
//                                 <div className="d-flex align-items-center ">
//                                     <img className="img-fluid rounded-pill" src={testing1} alt="testimony1"/>
//                                     <div className="ms-3">
//                                         <h5 className="title fs-6 mb-0">Amber koay</h5>
//                                         <p className="text-success mb-0">Student</p>
//                                     </div>
//                                 </div>
//                                 <p className="text-muted mt-3 mb-0">Lorem ipsum dolor sit amet consectetur
//                                     sit adipisicing
//                                     elit Optio
//                                     amet dolores placeat voluptatum magnam.
//                                 </p>

//                                 <ul className="text-warning list-unstyled mt-3">
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         </div>

//                         <div className="tiny-slide">
//                         <div className="col-12 mt-4 pt-2">
//                             <div className="rounded p-4 m-2 bg-white">
//                                 <div className="d-flex align-items-center">
//                                     <img className="img-fluid rounded-pill" src={testing2} alt="testimony2"/>
//                                     <div className="ms-3">
//                                         <h5 className="title fs-6 mb-0">Rachel Manon</h5>
//                                         <p className="text-success mb-0">Housewife</p>
//                                     </div>
//                                 </div>
//                                 <p className="text-muted mt-3 mb-0">Lorem ipsum dolor sit amet consectetur
//                                     sit adipisicing elit Optio amet
//                                     dolores placeat voluptatum magnam.</p>

//                                 <ul className="text-warning list-unstyled mt-3">
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="icon-content mdi mdi-star-outline"></i></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         </div>

//                         <div className="tiny-slide">
//                         <div className="col-12 mt-4 pt-2">
//                             <div className="rounded p-4 m-2 bg-white">
//                                 <div className="d-flex align-items-center">
//                                 <img className="img-fluid rounded-pill" src={testing3} alt="testimony3"/>
//                                     <div className="ms-3">
//                                         <h5 className="title fs-6 mb-0">John will</h5>
//                                         <p className="text-success mb-0">Businessman</p>
//                                     </div>
//                                 </div>
//                                 <p className="text-muted mt-3 mb-0">Lorem ipsum dolor sit amet consectetur
//                                     sit adipisicing
//                                     elit Optio amet
//                                     dolores placeat voluptatum magnam.</p>
//                                 <ul className="text-warning list-unstyled mt-3">
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         </div>

//                         <div className="tiny-slide">
//                         <div className="col-12 mt-4 pt-2">
//                             <div className="rounded p-4 m-2 bg-white">
//                                 <div className="d-flex align-items-center">
//                                     <img className="img-fluid rounded-pill" src={testing4} alt="testimony4"/>
//                                     <div className="ms-3">
//                                         <h5 className="title fs-6 mb-0">Achara Murry</h5>
//                                         <p className="text-success mb-0">Teacher</p>
//                                     </div>
//                                 </div>
//                                 <p className="text-muted mt-3 mb-0">Lorem ipsum, dolor sit amet consectetur
//                                     sit adipisicing
//                                     elit Optio amet
//                                     dolores placeat voluptatum magnam.</p>

//                                 <ul className="text-warning list-unstyled mt-3">
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
//                                     <li className="list-inline-item"><i className="icon-content mdi mdi-star-outline"></i></li>
//                                 </ul>
//                             </div>
//                             </div>
//                         </div>
//                         </Slider>

//                     </div>
//         </div>
//     </section>
//     </>
//   )
// }

// export default Testimony;







// const li = document.querySelectorAll(".nav-link");
//     const sec = document.querySelectorAll("section");

//     function activeMenu(){
//         let len=sec.length;
//         while(--len && window.scrollY + 97 < sec[len].offsetTop){
//             li.forEach(ltx =>ltx.classList.remove("active"));
//             li[len].classList.add("active");
//         }
//         activeMenu();
//         window.addEventListener("scroll");
//     }