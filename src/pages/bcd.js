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
//               const data = [
//                 {
//                 imgsrc: {testing1},
//                     title: "Amber koay",
//                     name: "Student",
//                     desc: "Lorem ipsum dolor sit amet consectetur sit adipisicing elit Optioamet dolores placeat voluptatum magnam."
//                 },
//                 {
//                     imgsrc: {testing2},
//                     title: "Rachel Manon",
//                     name: "Housewife",
//                     desc: "Lorem ipsum dolor sit amet consectetur sit adipisicing elit Optioamet dolores placeat voluptatum magnam."
//                 },
//                 {
//                 imgsrc: {testing3},
//                     title: "John will",
//                     name: "Businessman",
//                     desc: "Lorem ipsum dolor sit amet consectetur sit adipisicing elit Optioamet dolores placeat voluptatum magnam."
//                 },
//                 {
//                 imgsrc: {testing4},
//                     title: "Achara Murry",
//                     name: "Teacher",
//                     desc: "Lorem ipsum dolor sit amet consectetur sit adipisicing elit Optioamet dolores placeat voluptatum magnam."
//                 }
//             ];
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
//                 <Slider {...settings}>
//                     {data.map((index)=>{
//                         return (
//                             <div className="tiny-slide">
//                         <div className="col-12 mt-4 pt-2">
//                             <div className="rounded p-4 m-2 bg-white">
//                                 <div className="d-flex align-items-center ">
//                                     <img className="img-fluid rounded-pill" src={index.imgsrc} alt="testimony1"/>
//                                     <div className="ms-3">
//                                         <h5 className="title fs-6 mb-0">{index.title}</h5>
//                                         <p className="text-success mb-0">{index.name}</p>
//                                     </div>
//                                 </div>
//                                 <p className="text-muted mt-3 mb-0">{index.desc}
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
//                     </div>
//                         );
//                     })

//                     }
                    
//                 </Slider>
//             </div>
//         </div>
//     </section>
//     </>
//   )
// }

// export default Testimony;
