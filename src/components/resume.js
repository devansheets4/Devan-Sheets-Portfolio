import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Courses from './courses';
import Acumen from './acumen';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src='http://chittagongit.com/download/316595'
                alt='avatar'
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Devan Sheets</h2>
            <h4 style={{ color: 'grey' }}>Programmer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>
              {' '}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>3376 NC HWY 16 South, Jefferson, NC 28640</p>
            <h5>Phone</h5>
            <p>(336) 977-3622</p>
            <h5>Email</h5>
            <p> devansheets4@gmail.com</p>
            <h5>Web</h5>
            <p><a href="https://github.com/devansheets4" target="_blank" rel="noopener noreferrer">GitHub Repositories</a></p>
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
              course2='Data Structures & Algrithms'
              course3='Operating Systems & Networking'
              course4='Software Engineering'
              course5='Mobile App Development'
              course6='Software Development Projects'
              course7='Business Analytics'
            />
            <hr style={{ borderTop: '3px solid black' }} />
            <h2>Technical Acumen</h2>
            <Acumen
              acumen="Languages:"
              description="Java, C++, JavaScript, HTML5, CSS3, SQL, NodeJS, ExpressJS"

              acumen2="Web Frameworks:"
              description2="Bootstrap4, AngularJS, ReactJS"

              acumen3="Operating Systems:"
              description3="Windows, Mac"

              acumen4="Miscrosoft:"
              description4="Excel, Word, Powerpoint"

              acumen5="Analytics:"
              description5="SAS Enterprise Guide, SAS Enterprise Minor, Tableau"

              acumen6="Web Development:"
              description6="Created MEAN web application for business use, React based website portfolio, and basic HTML/CSS beginners website."
            />
            <hr style={{ borderTop: '3px solid black' }} />
            <h2>Experience</h2>
            <Experience
              startYear={2017}
              endYear='Present'
              jobName='Skyline/Skybest Communications - Information Technology Intern'
              jobDescription='Aid support of company work areas, PCs and peripherals.'
              jobDescription2='Fabricate new representative PCs for organization use.'
              jobDescription3='Help with noting technical support line for failing equiptment.'
              jobDescription4='Utilized remote desktop for spplication support.'
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
              jobDescription='Description of the Construction Intern position'
            />
            <hr style={{ borderTop: '3px solid black' }} />
            <h2>Skills</h2>
            <Skills skill='JavaScript' progress={100} />
            <Skills skill='HTML/ CSS' progress={80} />
            <Skills skill='NodeJS' progress={50} />
            <Skills skill='React' progress={75} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
