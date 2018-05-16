import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Overview from './Overview';
import Knowledge from './Knowledge';
import Experience from './Experience';
import Education from './Education';
import Resume from './Resume';
import Contact from './Contact';

export default class Main extends Component {
    render() {
        return <div>
            <Switch>
                <Route exact path='/' component={Overview} />
                <Route path='/knowledge' component={Knowledge} />
                <Route path='/experience' component={Experience} />
                <Route path='/education' component={Education} />
                <Route path='/resume' component={Resume} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </div>
    }
}