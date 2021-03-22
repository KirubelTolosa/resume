import React, { Component } from 'react'
import Summary from './Summary.jsx'
import Skills from './Skills.jsx'

class About extends Component {
    render () {
        return(
            <div>
                 <Summary></Summary>
                 <Skills></Skills>
            </div>
        )
    }
}

export default About;