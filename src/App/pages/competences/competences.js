import React, { Component } from 'react';

// Solutions
import img_s_1 from "./Clientesbarra.jpg"
import img_s_2 from "./Solucion_3D.jpg"
import img_s_3 from "./Solucion_4D.jpg"
import img_s_4 from "./Solucion_5D.jpg"
import img_s_5 from "./Solucion_6D.jpg"
import img_s_6 from "./Solucion_7D.jpg"

// Final resul
import img_2 from "./competences_img_2.JPG"
import img_3 from "./competences_img_3.jpg"
import img_4 from "./competences_img_4.jpg"
import img_5 from "./competences_img_5.jpg"

import Footer from "../../../components/footer";

class Competences extends Component {
    render() {
        const { translation } = this.props;
        return (
            <div className="App">
                <section class="projects-section bg-white mb-0" id="projects">
                    <div class="container">
                        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                            <div class="col-xl-2 col-lg-7"><img class="mb-3 mb-lg-0" src={img_s_1} alt="" height="500px" /></div>
                            <div class="col-xl-10 col-lg-5">
                                <div class="featured-text text-center text-lg-left">
                                    <h2>{translation.str_title}</h2>
                                    <h3 class="text-black-50 mb-0">{translation.str_body_1}</h3>
                                    <h3 class="text-black-50 mb-0">{translation.str_body_2}</h3>
                                    <h3 class="text-black-50 mb-0">{translation.str_body_3}</h3>
                                    <h3 class="text-black-50 mb-0">{translation.str_body_4}</h3>
                                    <h3 class="text-black-50 mb-0">{translation.str_body_5}</h3>
                                    <h3 class="text-black-50 mb-0">{translation.str_body_6}</h3>
                                    <h3 class="text-black-50 mb-0">{translation.str_body_7}</h3>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="container">

                        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                            <div class="col-lg-6">
                                <img class="img-fluid" src={img_s_2} alt="" />
                            </div>
                            <div class="col-lg-6">
                                <div class="bg-dark text-center h-100 project">
                                    <div class="d-flex h-100">
                                        <div class="project-text w-100 my-auto text-center text-lg-left">
                                            <h3 class="text-white-50 text-uppercase">{translation.str_3d}</h3>
                                            <hr class="d-none d-lg-block mb-0 ml-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                        <div class="col-lg-6">
                                <div class="bg-dark text-center h-100 project">
                                    <div class="d-flex h-100">
                                        <div class="project-text w-100 my-auto text-center text-lg-left">
                                            <h3 class="text-white-50 text-uppercase">{translation.str_4d}</h3>
                                            <hr class="d-none d-lg-block mb-0 ml-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img class="img-fluid" src={img_s_3} alt="" />
                            </div>
                        </div>
                        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                            <div class="col-lg-6">
                                <img class="img-fluid" src={img_s_4} alt="" />
                            </div>
                            <div class="col-lg-6">
                                <div class="bg-dark text-center h-100 project">
                                    <div class="d-flex h-100">
                                        <div class="project-text w-100 my-auto text-center text-lg-left">
                                            <h3 class="text-white-50 text-uppercase">{translation.str_5d}</h3>
                                            <hr class="d-none d-lg-block mb-0 ml-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                        <div class="col-lg-6">
                                <div class="bg-dark text-center h-100 project">
                                    <div class="d-flex h-100">
                                        <div class="project-text w-100 my-auto text-center text-lg-left">
                                            <h3 class="text-white-50 text-uppercase">{translation.str_6d}</h3>
                                            <hr class="d-none d-lg-block mb-0 ml-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img class="img-fluid" src={img_s_5} alt="" />
                            </div>
                        </div>
                        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                            <div class="col-lg-6">
                                <img class="img-fluid" src={img_s_6} alt="" />
                            </div>
                            <div class="col-lg-6">
                                <div class="bg-dark text-center h-100 project">
                                    <div class="d-flex h-100">
                                        <div class="project-text w-100 my-auto text-center text-lg-left">
                                            <h3 class="text-white-50 text-uppercase">{translation.str_7d}</h3>
                                            <hr class="d-none d-lg-block mb-0 ml-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center no-gutters mb-5 mt-5 mb-lg-0">
                            <div class="col-lg-6">
                                <img class="img-fluid" src={img_2} alt="" />
                                <img class="img-fluid" src={img_3} alt="" />
                            </div>
                            <div class="col-lg-6">
                                <div class="bg-dark text-center h-100 project">
                                    <div class="d-flex h-100">
                                        <div class="project-text w-100 my-auto text-center text-lg-left">
                                            <h4 class="text-white">{translation.str_sub_title_1}</h4>
                                            <p class="mb-0 text-white-50 text-justify">{translation.str_sub_body_1_1}</p>
                                            <p class="mb-0 text-white-50 text-justify">{translation.str_sub_body_1_2}</p>
                                            <br />
                                            <p class="mb-0 text-white-50 text-justify">{translation.str_sub_body_1_3}</p>
                                            <p class="mb-0 text-white-50 text-justify">{translation.str_sub_body_1_4}</p>
                                            <br />
                                            <p class="mb-0 text-white-50 text-justify">{translation.str_sub_body_1_5}</p>
                                            <p class="mb-0 text-white-50 text-justify">{translation.str_sub_body_1_6}</p>
                                            <hr class="d-none d-lg-block mb-0 ml-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center no-gutters mb-5 mt-5 mb-lg-0">
                            <div class="col-lg-6">
                                <img class="img-fluid" src={img_4} alt="" />
                                <img class="img-fluid" src={img_5} alt="" />
                            </div>
                            <div class="col-lg-6">
                                <div class="bg-dark text-center h-100 project">
                                    <div class="d-flex h-100">
                                        <div class="project-text w-100 my-auto text-center text-lg-left">
                                            <h4 class="text-white">{translation.str_sub_title_2}</h4>
                                            <p class="mb-0 text-white-50 text-justify">{translation.str_sub_body_2_1}</p>
                                            <br />
                                            <p class="mb-0 text-white-50 text-justify">{translation.str_sub_body_2_2}</p>
                                            <hr class="d-none d-lg-block mb-0 ml-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Competences;