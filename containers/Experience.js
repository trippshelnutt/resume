import React, { Component } from 'react';

export default class Experience extends Component {
    render() {
        return <div className="container" id="experience">
            <div className="page-header">
                <h4>Experience</h4>
            </div>
            <p><a href="http://www.inventureit.com" target="_blank">InventureIT</a>, Dalton, GA.</p>
            <p>Senior Software Engineer. January 2016 - present.</p>
            <p>Collaborated with other developers on an agile team to enhance and expand companyâ€™s software portfolio for clients in various industries. Development projects included practice management software for the medical industry and intervention tracking for education.</p>
            <ul>
                <li>Architected reusable, multi-tenant web application using ASP.Net MVC and Entity Framework to enable teachers to track student interventions and learning progress.</li>
                <li>Enhanced pathology tracking software to allow physicians and assistants to easily track and update status of lab orders using simplified search criteria.</li>
                <li>Streamlined workflow of practice management software to increase efficiency in physician offices, decrease errors in data entry, and improve patient experience.</li>
                <li>Led and mentored other team members to improve software development and release processes and increase overall development efficiency.</li>
            </ul>
            <p><a href="http://www.shawfloors.com" target="_blank">Shaw Industries Group, Inc.</a>, Dalton, GA.</p>
            <p>Senior Software Engineer. January 2013 - January 2016.</p>
            <p>Systems Engineer. December 2007 - January 2013.</p>
            <p>Participated in agile teams to improve and expand the companyâ€™s existing library of applications. Projects ranged from integration with external systems via web services to developing websites and desktop applications for the manufacturing floor.</p>
            <ul>
                <li>Led software architecture of several projects including a custom service bus, an efficiency and production tracking system, and a proprietary manufacturing process.</li>
                <li>Researched and evaluated new technologies for use in application development and led several presentations to encourage technical growth within the group.</li>
                <li>Coordinated efforts with external groups to integrate shop floor systems into HMI and order management applications on the manufacturing floor.</li>
                <li>Participated on an enterprise team to compose .Net development standards for the organization.</li>
                <li>Developed and deployed applications for managing and tracking production in a large-scale manufacturing environment.</li>
            </ul>
            <p><a href="http://www.harrisonaudio.com" target="_blank">Harrison Audio, LLC</a>, LaVergne, TN.</p>
            <p>Software Engineer. April 2005 - December 2007.</p>
            <p>Worked with other developers to maintain and enhance the company's existing software for control and automation of audio mixing consoles. Worked on a variety of projects dealing with OpenGL-based graphics and networking in a real-time, multi-threaded programming environment.</p>
            <ul>
                <li>Designed a networking interface module to communicate with 3rd party audio workstation software to integrate existing console hardware with other software vendors.</li>
                <li>Led major refactoring of DSP software for use with shared memory in a real-time operating system which greatly increased efficiency and maintainability.</li>
                <li>Simplified and consolidated scripts for configuration of net-bootable OS servers for ease of installation in production and on-site updating.</li>
            </ul>
        </div>
    }
}