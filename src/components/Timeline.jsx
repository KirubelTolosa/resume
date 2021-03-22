import React, { Component} from 'react'

class Timeline extends Component {
    render(){
        return(
            <div>
                <section className="colorlib-experience" data-section="timeline">
                <div className="colorlib-narrow-content">
                    <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">highlights</span>
                        <h2 className="colorlib-heading animate-box">Experience</h2>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="timeline-centered">
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                            <div className="timeline-entry-inner">
                            <div className="timeline-icon color-3">
                                <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                                <h2><strong>Newwave Telecom and Technologies inc. </strong><span>| July 2020 - present</span></h2>                                
                                <p>Designed and implemented a knowledge mining search service that uncovers valuable insights hidden in structured, semi-structured, and unstructured data using Azure-based AI services.</p>
                                <h4>Software Engineer Intern</h4>
                                <ul>
                                    <li>Developed a .Net Core data migration wrapper application using the Azure SDK to securely port data over to Azure blob container storage.</li>
                                    <li>Built a .NET Core MVC search UI with personalization implemented using Azure CDN and Azure storage containers for prospective B2B clients.</li>
                                    <li>Implemented authentication and authorization scheme in Azure AD.</li>
                                    <li>Optimized the file indexing with Queue triggered Azure functions from scheduled 1 day to ~275 microseconds.</li>
                                    <li>Set-up CI/CD pipelines for the application development on Azure DevOps. </li>
                                </ul>
                            </div>
                            </div>
                        </article>
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                            <div className="timeline-entry-inner">
                            <div className="timeline-icon color-4">
                                <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                                    <h2><strong>University of Maryland Baltimore County - UMBC </strong><span> | October 2019 - Present</span></h2>                                
                                        <h4>Research Assistant</h4>
                                        <p>Washington D.C. Black Power website | <a>http://blackpowerindc.umbc.edu/</a></p>
                                        <ul>
                                            <li>Redesigned and developed a web application using JavaScript, Html, CSS, and ArcGIS web-maps.</li>
                                            <li>Preprocessed web map dataset using NumPy and pandas Python. Optimized the semi-manual workflow that takes hours to complete down to ~500 microseconds.</li>
                                        </ul>
                                        <p>Immersive data visualization in Unreal Engine</p>
                                        <ul>
                                            <li>Developed a VR environment runtime feature that interfaces with a CouchDB, NoSQL database using REST API calls.</li>
                                            <li>Implemented a feature in Unreal Engine to interactively visualize data in a VR environment.</li>
                                            <li>Modeled a parametric Virtual Reality interaction space.</li>
                                        </ul>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                            <div className="timeline-entry-inner">
                            <div className="timeline-icon color-2">
                                <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                                    <h2><strong>Zemen Solution</strong><span> | September 2015 - August 2019</span></h2>                                
                                        <h4>Software Developer</h4>
                                        <ul>
                                            <li>Participated in all SDLC phases including design and implementation, testing, and deployment.</li>
                                            <li>Built .NET Framework and .NET Core Restful APIs with Swagger endpoint documentation</li>
                                            <li>Designed and Implemented databases, tables, and stored procedures in MS SQL Server and PL/SQL.</li>
                                            <li>Developed ASP.NET MVC Web applications with SQL Server backend services.</li>
                                            <li>Built single-page applications (SPA) using JavaScript, AJAX, Html, CSS, Bootstrap, and React in the front-end and C# based web APIs in the backend.</li>
                                            <li>Wrote unit and integration tests using NUnit and Moq.</li>
                                        </ul>                                        
                                </div>
                            </div>
                        </article>
                        <article class="timeline-entry begin animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
                                <div class="timeline-entry-inner">
                                    <div class="timeline-icon color-none">
                                </div>
                            </div>
                        </article>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}

export default Timeline;