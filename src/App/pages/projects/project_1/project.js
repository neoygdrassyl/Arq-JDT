import React, {Component} from 'react';
import "../projects.css"
import img_1 from "./project_img_1.jpg"
import img_2 from "./project_img_2.jpg"
import img_3 from "./project_img_3.jpg"
import img_4 from "./project_img_4.jpg"
import img_5 from "./project_img_5.jpg"
import img_6 from "./project_img_6.jpg"
import img_7 from "./project_img_7.jpeg"
import Footer from "../../../../components/footer";

class Project1 extends Component {
    render(){
    const { translation } = this.props;
    return (
      <div className="App">
        <section class="projects-section bg-white" id="projects">
        <div class="featured-text text-center text-black-70"><h1 class="container text-uppercase">{translation.str_subtitle_1}</h1></div>
            <div class="container mb-2">
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                    <a href={img_4}> 
                        <img class="w-100 rounded mb-4 img-thumbnail" src={img_4}  alt="" />
                    </a>
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                    <a href={img_5}>  
                        <img class="w-100 rounded mb-4 img-thumbnail" src={img_5} alt="" />
                    </a>
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                    <a href={img_1}>
                        <img class="w-100 rounded mb-4 img-thumbnail" src={img_1} alt="" />
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                    <a href={img_2}>
                        <img class="w-100 rounded mb-4 img-thumbnail" src={img_2} alt="" />
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                    <a href={img_6}> 
                        <img class="w-100 rounded mb-4 img-thumbnail" src={img_6} alt="" />
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                    <a href={img_3}>
                        <img class="w-100 rounded mb-4 img-thumbnail" src={img_3} alt="" />
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 mb-12 mb-lg-0">
                    <a href={img_7}>  
                        <img class="w-100 rounded mb-4 img-thumbnail" src={img_7}  alt="" />
                        </a>
                    </div>
                    
                </div>
            </div>
        
        </section>
        <Footer />
        </div>
        )
    }
}

export default Project1;