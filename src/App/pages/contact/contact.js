import React, {Component} from 'react';
import "./contact.css"
import img from "./contact_img_1.jpg"
import Footer from "../../../components/footer";

class Contact extends Component {
    render(){
    const { translation } = this.props;
    return (
      <div className="App">
          <section class="projects-section bg-white" id="projects">
            <div class="container">
                <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src={img} alt="" /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>{translation.str_title}</h4>
                            <p class="text-black-50 mb-0 text-justify">{translation.str_body_1}</p>
                            <br />
                            <p class="text-black-50 mb-0 text-justify">{translation.str_body_2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="contact-section bg-black">
            <div class="container">
            <div class="row">
            <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fab fa-facebook fa-3x text-primary mb-2"></i>
                                <h3 class="text-uppercase m-0">Facebook</h3>
                                <hr class="my-4" />
                                <p class="text-black-50"><a href="https://www.facebook.com/Taller-de-Arquitectura-3D-105379948265750">{translation.redirect}</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fab fa-instagram fa-3x text-primary mb-2"></i>
                                <h3 class="text-uppercase m-0">Instragram</h3>
                                <hr class="my-4" />
                                <p class="text-black-50"><a href="https://www.instagram.com/arq.jdtriana/">{translation.redirect}</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fab fa-whatsapp fa-3x text-primary mb-2"></i>
                                <h3 class="text-uppercase m-0">WhatsApp</h3>
                                <hr class="my-4" />
                                <p class="text-black-50">+57 (316) 50 60 177</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-cubes fa-3x fa-3x text-primary mb-2"></i>
                                <h3 class="text-uppercase m-0">3D Warehouse</h3>
                                <hr class="my-4" />
                                <p class="text-black-50"><a href="https://3dwarehouse.sketchup.com/user/3889828e-4b5f-4606-b76c-05d61c6837b6/Jose-Daniel-T">{translation.redirect}</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fab fa-linkedin fa-3x text-primary mb-2"></i>
                                <h3 class="text-uppercase m-0">Linkedin</h3>
                                <hr class="my-4" />
                                <p class="text-black-50"><a href="https://www.linkedin.com/in/jose-daniel-triana-restrepo-115043b6">{translation.redirect}</a></p >
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope fa-3x text-primary mb-2"></i>
                                <h3 class="text-uppercase m-0">Email</h3>
                                <hr class="my-4" />
                                <p class="text-black-50">arq.jdtriana@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4 justify-content-md-center">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt fa-3x fa-3x text-primary mb-2"></i>
                                <h3 class="text-uppercase m-0">Address</h3>
                                <hr class="my-4" />
                                <p class="text-black-50">Bucaramanga, Santander Colombia</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fab fa-youtube fa-3x text-primary mb-2"></i>
                                <h3 class="text-uppercase m-0">Youtube</h3>
                                <hr class="my-4" />
                                <p class="text-black-50"><a href="https://www.youtube.com/channel/UCzmXIFUkDv5cyRS-l1Cxq2w">{translation.redirect}</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt fa-3x text-primary mb-2"></i>
                                <h3 class="text-uppercase m-0">Phone</h3>
                                <hr class="my-4" />
                                <p class="text-black-50">+57 (316) 50 60 177</p>
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

export default Contact;