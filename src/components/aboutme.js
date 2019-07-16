import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import { Grid, Cell, Tab, Tabs } from 'react-mdl';
import Languages from './languages';
import ProgressBar from 'react-bootstrap/ProgressBar';
import profile1 from '../assets/profile1.jpg';
import huskies from '../assets/huskies.jpg';
import unccSmall from '../assets/unccSmall.png';
// import charlotte from '../assets/charlotte.png';

import freecodecamp from '../assets/freecodecamp.png';
import udemy from '../assets/udemy.png';
import skillshare from '../assets/skillshare.jpg';
import youtube from '../assets/youtube.png';

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
          <Cell col={2} />
          <Cell className='about-header' col={8}>
            <div>
              <h1>The guy behind the scenes</h1>
            </div>
          </Cell>
          <Cell col={2} />

          <Cell col={4}>
            <div className='about-center'>
              <div>
                <img src={huskies} alt='huskies' />
                <h2> Ashe County High School</h2>
                <h2> West Jefferson, NC</h2>
                <h2> Class of 2014</h2>
                <h2> Go Huskies</h2>
              </div>
              <hr
                style={{
                  width: '80%',
                  borderTop: '3px dotted black',
                  margin: 'auto'
                }}
              />
              <div>
                <img style={{ width: '200px' }} src={unccSmall} alt='uncc' />
                <h2> UNC Charlotte </h2>
                <h2> Class of 2018</h2>
                <h2> Bachelor of Science</h2>
                <h2> Computer Science</h2>
              </div>
            </div>
          </Cell>
          <Cell col={4}>
            <div shadow={5} className='about-left'>
              <img
                style={{ width: '75%', borderRadius: '20px' }}
                src={profile1}
                alt='Devan Sheets'
              />
            </div>
          </Cell>
          
          <Cell col={4}>

            <Grid>
              <Cell col={12}>
              </Cell>
              <Cell col={5}>
              <a href='https://www.udemy.com/' 
              target='_blank' 
              rel="noopener noreferrer"
              >
                <img src={udemy} style={{ width: '200px' }}  alt='udemy' />
              </a>
              </Cell>
              <Cell col={2}></Cell>
              <Cell col={5}>
              <a href='https://www.youtube.com/' 
              target='_blank' 
              rel="noopener noreferrer">
                <img style={{ width: '200px' }} src={youtube} alt='youtube' />
              </a>
              </Cell>
              
              <Cell col={5}>
              <a href='https://www.skillshare.com/' 
              target='_blank' 
              rel="noopener noreferrer"><img
                style={{ width: '200px' }}
                src={skillshare}
                alt='skillshare'
              />
              </a>
              </Cell>
              <Cell col={2}></Cell>
              <Cell col={5}>
              <a href='https://www.freecodecamp.com/' 
              target='_blank' 
              rel="noopener noreferrer"><img
                style={{ width: '200px' }}
                src={freecodecamp}
                alt='freecodecamp'
              /></a>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Grid className='grid-languages'>
          <Cell col={2} />
          <Cell shadow={7} className='languages' col={8}>
            <Typing speed={70}>
              <h1>{"<h1>What languages do I know?</h1>"}</h1>
            </Typing>
          </Cell>

          <Cell col={2} />
          <Cell col={2} />

          <Cell shadow={7} className='languages-list' col={2}>
            <Languages
              lang1='HTML'
              lang2='CSS'
              lang3='JAVA SCRIPT'
              lang4='REACT'
              lang5='ANGULAR'
              lang6='NODE'
              lang7='PYTHON'
            />
              
          </Cell>

          <Cell className='languages-skills' col={6}>
            <ProgressBar
              className='progress'
              animated
              now={90}
            />
            <ProgressBar
              className='progress2'
              animated
              now={90}
            />
            <ProgressBar
              className='progress2'
              animated
              now={70}
            />
            <ProgressBar
              className='progress2'
              animated
              now={55}
            />
            <ProgressBar
              className='progress2'
              animated
              now={40}
            />
            <ProgressBar
              className='progress2'
              animated
              now={30}
            />
            <ProgressBar
              className='progress2'
              animated
              now={25}
            />
          </Cell>

        </Grid>
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
