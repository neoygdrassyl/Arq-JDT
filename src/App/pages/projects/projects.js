import React, {Component} from 'react';
import "./projects.css"
import { Link } from 'react-router-dom';
import img_1 from "./project_1/project_img_7.jpeg"
import img_2 from "./project_2/A3.jpg"
import img_soon from "./soon.jpg"
import Footer from "../../../components/footer";

class Project extends Component {
    render(){
    const { translation } = this.props;
    return (
      <div className="App">
        <section class="projects-section bg-white" id="projects">
        <div class="featured-text text-center text-black-70"><h1 class="container">{translation.str_title}</h1></div>
            <div class="container mb-2">
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                        <Link to={'/project_1'}>
                        <img class="w-100 rounded mb-4 img-thumbnail" src={img_1} alt="" />
                        <div class="carousel-caption"><h6 class="text-light">{translation.str_subtitle_1}</h6></div>
                        </Link>
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                        <Link to={'/project_2'}>
                        <img class="w-100 rounded mb-4 img-thumbnail" src={img_2} alt="" />
                        <div class="carousel-caption"><h6 class="text-light">{translation.str_subtitle_2}</h6></div>
                        </Link>
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 ">
                        <Link>
                        <img class="w-100 rounded mb-4 img-thumbnail" src={img_soon} alt="" />
                        <div class="carousel-caption"><h6 class="text-light">{translation.str_soon}</h6></div>
                        </Link>
                    </div>
                </div>
            </div>
        
        </section>
        <Footer />
        </div>
        )
    }
}

export default Project;