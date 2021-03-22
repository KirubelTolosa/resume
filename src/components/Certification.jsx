import React, {Component} from 'react'

class Certifcation extends Component {
    render (){
        return(
            
            <section className="colorlib-about" data-section="certifcations">            
                <div class="colorlib-narrow-content">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                        <span class="heading-meta">Certifications</span>
                        <h2 class="colorlib-heading animate-box fadeInUp animated">Certifications</h2>
                    </div>
                </div>
                    <div class="row">                   
                                <div class="col -xs-12 col-sm-6 col-md-3 animate-box">
                                <a href="blog.html" class="blog-img"><img src="images/azure-developer-associate.png" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></img></a>
                                </div>  
                                <div class="col-xs-10 col-md-6 animate-box">
                                    <dl class="dl-horizontal">
                                        <br></br><br></br>
                                        <h2 >Microsoft Certified<br></br>
                                            <strong><a href="https://www.youracclaim.com/badges/8db22d2e-7acb-42ef-9f09-e5bd2646f2a1?source=linked_in_profile">Azure Developer Associate</a></strong></h2>
                                        <p>Issued Feb 2021<br></br>Expires Feb 2023 | H680-7270</p>
                                    </dl>
                                </div>                        
                    </div><br></br><br></br>
                </div>
            </section>
            
        )
    }    
}

export default Certifcation;