import React, { Component } from 'react';
import { Grid, Cell, Tab, Tabs } from 'react-mdl';
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
        <div>
          <h1>AboutMe</h1>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1> What I do </h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1> Where i'm from </h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
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
          <Tab>What I do </Tab>
          <Tab>Where i'm from</Tab>
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
