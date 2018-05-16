
import React, { Component } from 'react';

import Navigation from './Navigation';
import Overview from './Overview';
import Knowledge from './Knowledge';
import Experience from './Experience';
import Education from './Education';
import Resume from './Resume';
import Contact from './Contact';

export default class App extends Component {
    render() {
        return <div>
            <Navigation />
            <Overview />
            <Knowledge />
            <Experience />
            <Education />
            <Resume />
            <Contact />
        </div>
    }
}