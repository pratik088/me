import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About ME</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a grad student from Conestoga College with computer applications security and computer applications development. I love exploring new technologies and love to do reverse engineering of the created applications to check for malware and possible vulnerabilities.</p>
                    <p>I have experience with building applications in android with kotlin and java and web apps in C# with MVC. I also have experience in web technologies such as node.js , react.js , angular and php. My other interest apart from development is computer security and thats why I have learned penetration testing and malware analysis.
                        Currently I am working with DENO as I feel that it can replace NODE in future.
</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building website with Node , react , express, angular, html , css , php and deno. I also have experience in building web applications with C# MVC architecture.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Malware Analysis</h3>
                    <p>I have core competency in Computer forensics and malware analysis, Vulnerability Research,
                        Reverse engineering, Cyber Security, Intrusion detection systems, Intel assembly language,
                        Ollydbg ,Linux, VMware, C++ , Windbg , IDA pro and SNORT. 
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Mobile Development</h3>
                    <p>I have created multiple android applications with java and currently I have created an application with kotlin and ML kit of firebase. I have good command on OOP concepts and making optimized applications to save memory also I have learned machine learning in my graduation so I love to use it in real life projects.</p>
                </div>
                </div>
            </div>
        
            </div>
        </div>
        </section>
      </div>
    )
  }
}
