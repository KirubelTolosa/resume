import React, {Component} from 'react'

class Sidebar extends Component {
    render () {
        return(
            <div>
              <div>
                <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"><i /></nav>
                <aside id="colorlib-aside" className="border js-fullheight">
                  <div className="text-center">
                    <div className="author-img" style={{backgroundImage: 'url(images/KirubelTolosa_Portrait.jpeg)'}} />
                    <p  id="colorlib-logo"><a href="index.html">KIRUBEL TOLOSA</a></p>                    
                  </div>
                  <nav id="colorlib-main-menu" role="navigation" className="navbar">
                    <div id="navbar" className="collapse">
                      <ul>
                        <li><a href="#about" data-nav-section="about">About</a></li>                        
                        <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                        <li><a href="#certifcations" data-nav-section="certifcations">Certifcations</a></li>
                        <li><a href="#education" data-nav-section="education">Education</a></li>
                        <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                        <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                      </ul>
                    </div>
                  </nav>
                  <nav id="colorlib-main-menu">
                    <ul>
                      <li><a href="https://github.com/KirubelTolosa" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/kirubeltolosa/" target="_blank" rel="noopener noreferrer"><i className="icon-social-linkedin"></i></a></li>
                    </ul>
                  </nav>
                  <br></br>
                  <div className="colorlib-footer">
                    <p><strong>
                        <span className="email">tolosa.kirubel@gmail.com</span>
                        <span className="email">240-564-9308</span>
                        </strong></p><br></br><br></br>
                    <p><small>
                      Dream without fear, love without limits, and let your life sing its song!!
                    </small></p>
                  </div>
                  
                </aside>
              </div>
            </div>
        )
    }
}

export default Sidebar;