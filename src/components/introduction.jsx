import React, { Component } from 'react'
var bg=require('../IMG_2456.jpg')

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style ={ { backgroundImage: "url("+bg+")" } }>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{color: "white"}}>Hi! <br />I'm Pratik</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1WxPnInfG6GGMKk-IyJQ4qvSkewbjZgP6/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style ={ { backgroundImage: "url("+bg+")" } }>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color: "white"}}>I love <br/> Building<br /> THINGS !!</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/pratik088" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
