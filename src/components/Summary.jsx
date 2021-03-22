import React, { Component } from 'react'

class Summary extends Component {
    render (){
        return(
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row summary-text">
                    <div className="col-md-12">
                        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                        <div className="col-md-12">
                            <div className="about-desc">
                            <span className="heading-meta">About me</span>
                            <h2 className="colorlib-heading">SUMMARY</h2>
                            <p>A software engineer with 5+ years of experience in building scalable and high throughput applications. A certified Azure developer with extensive knowledge in designing and developing applications on the cloud. Possess a master’s degree in information systems with a focus on distributed systems and machine learning. Looking for a software engineering position that leverages my skills in .Net, C#, React, Azure, etc.</p>
                            </div>
                        </div>
                        <div>
                            <img src="images/underline.png" class="img-fluid"></img>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Summary;