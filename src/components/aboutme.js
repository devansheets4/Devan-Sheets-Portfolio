import React, { Component } from 'react';
// import Typing from 'react-typing-animation';
import { Grid, Cell, Tab, Tabs } from 'react-mdl';
import Sheets from '../assets/Sheets.PNG';
import IrregularPlant from '../assets/IrregularPlant.PNG';
import portfolio from '../assets/portfolio.PNG';
// import Languages from './languages';
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import profile1 from '../assets/profile1.jpg';
// import huskies from '../assets/huskies.jpg';
// import unccSmall from '../assets/unccSmall.png';
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
        <Grid className='one'>
          <Cell col={4}>
            <img src={Sheets} style={{ width: '85%' }} alt='Sheets Store' />
            <hr style={{ width: '85%' }} />
            <img
              src={portfolio}
              style={{ width: '85%' }}
              alt='IrregularPlant'
            />
            <hr style={{ width: '85%' }} />
            <img
              src={IrregularPlant}
              style={{ width: '85%' }}
              alt='IrregularPlant'
            />
          </Cell>
          <Cell className='skyline' col={8}>
            <h4>
              Hello! My name is Devan Sheets, I am an ongoing alumni of the {''}
              <span style={{ color: 'green' }}>
                University of North Carolina at Charlotte
              </span>{' '}
              with a Bachelors of Science degree in Computer Science. I am
              presently an Information Technology intern for{' '}
              <span>
                <a
                  href='https://www.skybest.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: 'black', textDecoration: 'underline' }}
                >
                  Skybest Communications
                </a>
              </span>{' '}
              in West Jefferson, NC.
            </h4>
            <br />
            <br />
            <h4>
              Since graduation, and separate from my work activity, I have been
              learning Web Development, mostly front-end, but also some full
              stack. To the side you can see screen captures of the two websites
              and one web applicaiton I have assembled so far, with more data
              and live connections on the Projects page.
            </h4>
            <br />
            <br />
            <h4>
              In learning web development, I have used resources from Udemy,
              Skillshare, YouTube, and FreeCodeCamp alongside my degree to
              further my education. I have learned tools and languages such as
              HTML, CSS, JavaScript, ReactJS, NodeJs, AngularJS, Express, and
              Python. Further, I am using a tool called GitKracken as an easier
              method to push code to my GitHub repositories.
            </h4>
            <br />
            <br />
            <h4>
              On the off chance that you are searching for somebody to make your
              own site, or if you may have any other inquiries, please don't
              hesitate to get in touch with me!
            </h4>
          </Cell>
        </Grid>
      );
    } else if (this.state.activeTab === 1) {
      return <h2> hey</h2>;
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
          {/* <Tab>About Me</Tab> */}
          {/* <Tab>Languages</Tab> */}
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
