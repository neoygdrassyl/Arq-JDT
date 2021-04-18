import React, { Component } from 'react';
import img from "./about_img.jpg"
import Footer from "../../../components/footer";

// Logos
import logo_1 from "./Archicad1.jpg"
import logo_2 from "./autocad-logo.png"
import logo_3 from "./Lumion.jpg"
import logo_4 from "./navisworks-full-logo.png"
import logo_5 from "./Revit.png"
import logo_6 from "./Sketchup_logo.jpg"

//  Knowledge & Skills

class About extends Component {
    render() {
        const { translation } = this.props;
        return (
            <div className="App">
                <section class="projects-section bg-white">
                    <div class="container">
                        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                            <div class="col-lg-6">
                                <div class="bg-white text-center h-100 project">
                                    <div class="d-flex h-100">
                                        <div class="project-text w-100 my-auto text-center text-lg-left">
                                            <h4 class="">{translation.str_title}</h4>
                                            <p class="mb-0">{translation.str_subtitle_1}</p>
                                            <hr class="d-none d-lg-block mb-0 ml-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6"><img class="img-fluid" src={img} alt="" /></div>
                        </div>
                        <div class="row justify-content-center no-gutters">
                            <div class="col-lg-12 order-lg-first">
                                <div class="bg-white h-100 project">
                                    <div class="d-flex h-100">
                                        <div class="project-text w-100 my-auto text-center text-lg-left">
                                            <p class="mb-0 text-justify">{translation.str_body_1}</p>
                                            <p></p>
                                            <p class="mb-0 text-justify">{translation.str_body_2}</p>
                                            <p></p>
                                            <p class="mb-0 text-justify">{translation.str_body_3}</p>
                                            <p></p>
                                            <p class="mb-0 text-justify">{translation.str_body_4}</p>
                                            <p></p>
                                            <p class="mb-0 text-justify">{translation.str_body_5}</p>
                                            <hr class="d-none d-lg-block mb-0 mr-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="card py-4 h-100">
                                    <div class="card-body text-center p-0">
                                        <img class="img-fluid" src={logo_1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="card py-4 h-100">
                                    <div class="card-body text-center">
                                        <img class="img-fluid" src={logo_2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="card py-4 h-100">
                                    <div class="card-body text-center p-0">
                                        <img class="img-fluid" src={logo_3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="card py-4 h-100">
                                    <div class="card-body text-center">
                                        <img class="img-fluid" src={logo_4} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="card py-4 h-100">
                                    <div class="card-body text-center">
                                        <img class="img-fluid" src={logo_5} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3 mb-md-0">
                                <div class="card py-4 h-100">
                                    <div class="card-body text-center p-0">
                                        <img class="img-fluid" src={logo_6} alt="" />
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

export default About;