import React, { Component } from 'react'

class Skills extends Component {
    render () {
        return(
            <section className="colorlib-about" data-section="skills">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">What I do?</span>
                            <h2 className="colorlib-heading">My tech stack</h2>
                        </div>
                    </div>
                    <div className="row row-pt-md">
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-3">
                            <span className="icon">
                            <i className="icon-monitor" />
                            </span>
                            <div className="desc">
                                <h3>Front-end</h3>
                                <p>Experienced in building user-centered single and multipage web applications.</p>   <br></br>
                                <h3><strong>React, Javascript, Typescript, Html, CSS, Bootstrap, .NET Core MVC..</strong></h3>                                                             
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-4">
                            <span className="icon">
                            <i className="icon-data" />
                            </span>
                            <div className="desc">
                                <h3>Back-End</h3>
                                <p>Adept at developing high throughput, scalable backend services such as Web APIs, Databases, Microservices</p>
                                <h3><strong>C#, .NET Core, .NET Framework, Python, MS SQL SERVER, PL/SQL, Couch DB</strong></h3>
                            </div>
                            </div> 
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-2">
                            <span className="icon">
                            <i className="icon-cloud3" />
                            </span>
                            <div className="desc">
                                <h3>Cloud</h3>
                                <p>I am a certified Azure developer with extensive knowledge in designing and developing applications in the cloud</p>
                                <h3><strong>Microsoft Azure, AWS</strong></h3>
                            </div>
                            </div>
                        </div>                        
                    </div>
                </div>                
            </section>
        )
    }
}

export default Skills;