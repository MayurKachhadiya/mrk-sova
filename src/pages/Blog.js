import React from 'react'
import blog1 from "../Images/blog1.jpg";
import blog2 from "../Images/blog2.jpg";
import blog3 from "../Images/blog3.jpg";
const Blog = () => {
  return (
    <>
     <section className="section " id="blog">
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
    </>
  )
}

export default Blog;
