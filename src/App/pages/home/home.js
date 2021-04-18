import React, {Component} from 'react';
import "./home.css"
import CO_Flag from "./CO.png"
import home_clip from "./home_clip.mp4"

class Home extends Component {  
  render(){
    const { translation } = this.props;
    return (
      <div className="App">
        <header>
          <div className="overlay"></div>
          <video id="myVideo" preload="auto" autoPlay="true" loop="loop" muted="muted" volume="0">
            <source src={home_clip} type="video/mp4" />
            Video not supported
          </video>
          <div className="content">
            <div className="text-left">
            <h1  className="logo" >{translation.str_title}</h1>
            <hr className="solid" />
            <h4>{translation.str_subtitle_1}</h4>
            <h5 className="info-text">{translation.str_subtitle_2}</h5>
            <div className="footer">
              <p className="text-white-50">
              {translation.srt_home_footer}  <img src={CO_Flag} /> &nbsp;&nbsp;
              </p>
            </div>
            </div>
          </div>
        </header>
        </div>
        )
    }
}

export default Home;