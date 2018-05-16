import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        return <div className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button id="navbarButton" type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Tripp Shelnutt - Software Engineer</a>
                </div>
                <div id="navbarCollapse" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><a id="overviewNav" href="#">Overview</a></li>
                        <li><a id="knowledgeNav" href="#">Knowledge</a></li>
                        <li><a id="experienceNav" href="#">Experience</a></li>
                        <li><a id="educationNav" href="#">Education</a></li>
                        <li><a id="resumeNav" href="#">Resume</a></li>
                        <li><a id="contactNav" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    }
}
