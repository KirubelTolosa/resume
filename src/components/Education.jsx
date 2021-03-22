import React, { Component} from 'react'

class Education extends Component {
    render () {
        return (
            <section class="colorlib-education" data-section="education">
                <div class="colorlib-narrow-content">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                        <span class="heading-meta">Education</span>
                        <h2 class="colorlib-heading animate-box fadeInUp animated">Education</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                        <div class="fancy-collapse-panel">
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingOne">
                                    <h4 class="panel-title">
                                        <a  class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><strong>Information systems (MSC), UMBC</strong>
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                    <div class="panel-body">
                                        <div class="row">
                                        <div class="col-md-6">
                                            <p>University of Maryland, Baltimore County (3.9 GPA)</p>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Sep, 2019 – May, 2021</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingTwo">
                                    <h4 class="panel-title">
                                        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Bachelor of Science, AAU
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div class="panel-body">
                                        <div class="row">
                                        <div class="col-md-6">
                                            <p>Addis Ababa University</p>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Sep, 2011 – Feb, 2016</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
 
export default Education;