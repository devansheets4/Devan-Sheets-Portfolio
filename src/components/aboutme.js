import React, { Component } from 'react';
import { Grid, Cell, Tab, Tabs } from 'react-mdl';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import charlotte from '../assets/charlotte.png';

// import freecodecamp from '../assets/freecodecamp.png';
// import udemy from '../assets/udemy.png';
// import skillshare from '../assets/skillshare.jpg';
// import youtube from '../assets/youtube.png';

// import html5 from '../assets/html5.png';
// import css3 from '../assets/css3.png';
// import javascript from '../assets/javascript.png';
// import angular from '../assets/angular.png';
// import react from '../assets/react.png';
// import nodejs from '../assets/nodejs.png';
// import mongodb from '../assets/mongodb.png';

// import github from '../assets/github.png';
// import bitbucket from '../assets/bitbucket.png';
// import gitkracken from '../assets/gitkracken.png';
// import vscode from '../assets/vscode.png';
// import family from '../assets/family.JPG';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Grid className='grid-about'>
          <Cell className='aboutme-left' col={4}>
            <div>
              <h1>Hello There!</h1>
            </div>
          </Cell>

          <Cell className='aboutme-right' col={8}>
            <div>
              <h1>My name is Devan Sheets & I am a graduate of</h1>
            </div>
          </Cell>

          <Cell className='aboutme-right' col={8}>
            <div>
              <a
                href='https://uncc.edu'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h1 style={{ textDecoration: 'underline', color: 'black' }}>
                  The University of North Carolina at Charlotte
                </h1>
              </a>
            </div>
          </Cell>

          <Cell className='aboutme-left' col={4}>
            <div>
              <h1>with a Bachelors in</h1>
            </div>
          </Cell>

          <Cell className='aboutme-left' col={4}>
            <div>
              <h1>Computer Science.</h1>
            </div>
          </Cell>

          <Cell className='aboutme-right' col={8}>
            <div>
              <h1>
                I work for{' '}
                <a
                  href='https://skybest.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Skyline/Skybest
                </a>{' '}
                communications in my
              </h1>
            </div>
          </Cell>

          <Cell className='aboutme-right' col={8}>
            <div>
              <h1>hometown of West Jefferson, NC as an Information</h1>
            </div>
          </Cell>

          <Cell className='aboutme-left' col={4}>
            <div>
              <h1>Technology Intern</h1>
            </div>
          </Cell>
        </Grid>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Grid className='grid-languages'>
          <Cell col={2} />
          <Cell className='languages' col={8}>
            <div>
              <h1>{'<h1> What languages do I know? </h1>'}</h1>
            </div>
          </Cell>

          <Cell col={2} />
          <Cell col={2} />

          <Cell className='languages-list' col={2}>
            <div>
              <h2>HTML</h2>
              <h2>CSS</h2>
              <h2>JavaScript</h2>
              <h2>React</h2>
              <h2>Angular</h2>
              <h2>Node</h2>
              <h2>Python</h2>
            </div>
          </Cell>

          <Cell className='languages-skills' col={6}>
            <ProgressBar
              className='progress'
              striped
              variant='danger'
              now={90}
            />
            <ProgressBar
              className='progress2'
              striped
              variant='danger'
              now={90}
            />
            <ProgressBar
              className='progress2'
              striped
              variant='danger'
              now={60}
            />
            <ProgressBar
              className='progress2'
              striped
              variant='danger'
              now={45}
            />
            <ProgressBar
              className='progress2'
              striped
              variant='danger'
              now={45}
            />
            <ProgressBar
              className='progress2'
              striped
              variant='danger'
              now={30}
            />
            <ProgressBar
              className='progress2'
              striped
              variant='danger'
              now={25}
            />
          </Cell>
        </Grid>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className='whereimfrom'>
          <h1> Where i'm from </h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className='goals'>
          <h1> What my goals are </h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='category-tabs'>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>About Me</Tab>
          <Tab>Languages</Tab>
          <Tab>What I can do</Tab>
          <Tab>My Goals</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
