import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

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
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(111) 222-3333</p>
            <h5>Email</h5>
            <p> someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2018}
              schoolName='The University of North Carolina at Charlotte'
              schoolDescription='Go 49ers!!'
            />
            <Education
              startYear={2019}
              endYear={2021}
              schoolName='The University of Colorado at Boulder'
              schoolDescription='Go Bison!!'
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Experience</h2>
            <Experience
              startYear={2015}
              endYear={2016}
              jobName='Skyline/Skybest - Costruction Intern'
              jobDescription='Description of the Construction Intern position'
            />
            <Experience
              startYear={2016}
              endYear={2017}
              jobName='Skyline/Skybest - Field Services Technician Intern'
              jobDescription='Description of the Field Services Technician Intern Intern position'
            />
            <Experience
              startYear={2017}
              endYear='Present'
              jobName='Skyline/Skybest - Information Technology Intern'
              jobDescription='Description of the Information Technology Intern Intern position'
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
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
