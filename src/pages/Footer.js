import React from 'react'
import logo from "../Images/logo-light.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-footer footer-bar bg-black p-4 ">
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
    </>
  )
}

export default Footer;
