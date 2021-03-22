import React, {Component} from 'react'
import ProjectPopUp from './ProjectPopUp'

class Projects extends Component{

    render(){
        return(
                <section className="colorlib-about" data-section="projects">
                   <div className="colorlib-narrow-content">
                      <div className="row">
                         <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                         <span class="heading-meta">Projects</span>
                            <h2 className="colorlib-heading">Recent Projects</h2>
                         </div>
                      </div>
                      <div className="row">                          
                      <div className="col-md-4 col-sm-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                            <div className="services blog-entry">
                               <a href="https://covidapi-v1.azurewebsites.net/index.html" className="blog-img" target="_blank"><img src="images/covid.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                               <div className="desc">
                                  <span><small>April, 2020 </small> | <small> COVID-19 REST API </small> </span>
                                  <h3><a href="blog.html">A RESTful-API | Covid data</a></h3>
                                  <h4><a href="https://github.com/KirubelTolosa/CovidAPI_.NETCore" target="_blank">Source code</a></h4>
                                  <p>This Rest-API contains an injestion console application which ports over and transforms .csv format data from Johns Hopkins public repository and exposes multiple endpoints to query the transformed data.</p>
                               </div>
                            </div>
                         </div>

                      <div className="col-md-4 col-sm-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                            <div className="services blog-entry">
                               <a href="https://www.usmd.edu/covid-taskforce/app-challenge-winners" className="blog-img" target="_blank" ><img src="images/followup.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                               <div className="desc">
                                  <span><small>July, 2020 </small> | <small> FollowUP </small></span>
                                  <h3><a href="https://www.usmd.edu/covid-taskforce/app-challenge-winners" target="_blank">Remote Patient montoring app</a></h3>
                                  <h4><a href="https://www.usmd.edu/covid-taskforce/app-challenge-winners">Press Release,  </a><a href="https://news.umbc.edu/two-umbc-student-teams-win-usm-covid-19-app-challenge/" target="_blank"> UMBC News</a></h4>
                                  <p>The app enables healthcare providers to track the condition of people with COVID-19 who are isolating at home. By receiving regular symptom updates, physicians and nurses are able to more easily follow-up with their patients as needed.</p>
                               </div>
                            </div>
                         </div>

                        
                         
                         <div className="col-md-4 col-sm-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                            <div className="services blog-entry">
                               <a href="https://video.ibm.com/recorded/128091360" className="blog-img" target="_blank" ><img src="images/strive.png" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                               <div className="desc">
                                  <span><small>September, 2020 </small> | <small> Health </small> </span>
                                  <h3><a href="https://video.ibm.com/recorded/128091360">Exercise companion app</a></h3>
                                  <h4><a href="https://video.ibm.com/recorded/128091360" target="_blank">Announcement</a></h4>
                                  <p>A personalized, data-driven, exercise companion app supporting mental health through the use of AI. The app leverages IBM's Watson AI to detect user emotions and recommends exercises that help in maintaining mental health.</p>
                               </div>
                            </div>
                         </div>
                        
                        
                        <div class="row">
                        <div class="col-xs-12 .col-sm-8 .col-md-8 animate-box fadeInUp animated"><br></br>
                        <p><a href="https://drive.google.com/file/d/1fVE0L17dqsFjP34LX_ujrIM9iAivNRgk/" class="btn btn-primary btn-lg btn-load-more" target="_blank"  ><strong>View/Download Resume </strong><i class="icon-download"></i></a></p>
                        </div>
                        </div>
                         
                      </div>                      
                   </div>
                </section>
        )
    }
}

export default Projects;