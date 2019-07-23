import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Courses from './courses';
import Acumen from './acumen';
import avatar from '../assets/avatar.jpg';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className='resume-left' col={4}>
            <div style={{ textAlign: 'center' }}>
              <img src={avatar} alt='avatar' style={{ height: '200px' }} />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Devan Sheets</h2>
            <h4 style={{ color: 'grey' }}>Programmer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Phone</h5>
            <p>(336) 977-3622</p>
            <h5>Email</h5>
            <p> devansheets4@gmail.com</p>
            <h5>Web</h5>
            <p>
              <a
                href='https://github.com/devansheets4'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub Repositories
              </a>
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2018}
              schoolName='The University of North Carolina at Charlotte'
              schoolDescription='Bachelors of Science, Computer Science'
              schoolConcentration='Networking and Distributed Systems'
            />
            <hr style={{ borderTop: '3px solid black' }} />
            <h2>Noteworthy Courses</h2>
            <Courses
              course='Computer Programming'
              course1='Computer Networks'
              course2='Data Structures & Algorithms'
              course3='Operating Systems & Networking'
              course4='Software Engineering'
              course5='Mobile App Development'
              course6='Software Development Projects'
              course7='Business Analytics'
            />
            <hr style={{ borderTop: '3px solid black' }} />
            <h2>Technical Acumen</h2>
            <Acumen
              acumen='Languages:'
              description='Java, C++, JavaScript, HTML5, CSS3, SQL, NodeJS, ExpressJS'
            />
            <Acumen 
              acumen='Web Frameworks:'
              description='Bootstrap4, AngularJS, ReactJS'
              />
              <Acumen 
              acumen='Operating Systems:'
              description='Windows, Mac'
              />
              <Acumen 
              acumen='Miscrosoft:'
              description='Excel, Word, Powerpoint'
              />
              <Acumen 
              acumen='Analytics:'
              description='SAS Enterprise Guide, SAS Enterprise Minor, Tableau'
              />
              <Acumen 
              acumen='Web Development:'
              description='Created MEAN stack web application, React based website portfolio, and basic HTML/CSS website.'
              /> 
            <hr style={{ borderTop: '3px solid black' }} />
            <h2>Experience</h2>
            <Experience
              startYear={2017}
              endYear='Present'
              jobName='Skyline/Skybest Communications - Information Technology Intern'
              jobDescription='Aid support of company work areas, PCs and peripherals.'
              jobDescription2='Fabricate new representative PCs for organization use.'
              jobDescription3='Help with noting technical support line for failing equipment.'
              jobDescription4='Utilized remote desktop for application support.'
              jobDescription5='Web Application Development.'
            />
            <Experience
              startYear={2016}
              endYear={2017}
              jobName='Skyline/Skybest Communications - Field Services Technician Intern'
              jobDescription='Provide service and support to residential fiber optic and copper cabling.'
              jobDescription2='Establishment of inside wires, set-top boxes, telephone, modem, and router technology to the customers home.'
              jobDescription3='On location troubleshooting of TV, web, and telephone or cabling administrations.'
              jobDescription4='Central office/ Remote office cable pair establishment and upkeep.'
            />
            <Experience
              startYear={2015}
              endYear={2016}
              jobName='Skyline/Skybest Communications - Costruction Intern'
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
