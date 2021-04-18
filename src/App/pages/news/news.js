import React, {Component} from 'react';

// Components
import Lists from "../../../components/posts";
import Footer from "../../../components/footer";

class News extends Component {
    render(){
    const { translation } = this.props;
    return (
      <div className="App">
            <section class="projects-section bg-white">  
                <div class="featured-text text-center text-black-70"><h1 class="container">ULTIMAS PUBLICACIONES</h1></div>

            <Lists translation={translation}/>
            </section>
            <Footer />

        </div>
        )
    }
}

export default News;