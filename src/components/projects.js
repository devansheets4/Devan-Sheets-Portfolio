import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>
          {/*--------------------------------------------------------------------------------------------------------- */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '176px',
                background:
                  'url(https://aglowiditsolutions-6lohnuosd1nx.netdna-ssl.com/wp-content/uploads/2018/09/Hire-Mean-Stack-Developer.png) center / cover'
              }}
            />
            <CardText style={{ fontWeight: 'bold', textAlign: 'center' }}>
              Skyline/Skybest Irregular Plant Web Application
            </CardText>
            <CardText style={{ textAlign: 'center' }}>
              This is a MEAN stack application built with AngularJS, NodeJS,
              Express, and a MongoDB backend non-relational database.
            </CardText>

            <CardActions style={{ textAlign: 'center' }}>
              <Button
                colored
                href='https://github.com/devansheets4/Irregular-Plant-App'
                target='_blank'
              >
                GitHub
              </Button>
              <Button
                colored
                href='https://youtu.be/3hBDMfZwr80'
                target='_blank'
              >
                View Desktop Demo
              </Button>
              <Button
                colored
                href='https://www.youtube.com/watch?v=V5nDs7EM7-0&t=3s'
                target='_blank'
              >
                View Mobile Demo
              </Button>
            </CardActions>

            <CardMenu style={{ color: 'fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          {/*--------------------------------------------------------------------------------------------------------- */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '176px',
                background:
                  'url(https://www.codingdojo.com/blog/wp-content/uploads/html-css-js.png) center / cover'
              }}
            />
            <CardText style={{ fontWeight: 'bold', textAlign: 'center' }}>
              {' '}
              Sheets Country Store{' '}
            </CardText>
            <CardText style={{ textAlign: 'center' }}>
              My very first website ever built. Constructed using only barebones
              HTML, CSS, JavaScript, and some Bootstrap. This was mainly a
              project to build up my understanding of what goes into building
              larger scale websites with JavaScript frameworks such as React and
              Angular.
            </CardText>

            <CardActions style={{ textAlign: 'center' }}>
              <Button
                colored
                href='https://github.com/devansheets4/Sheets-Country-Store'
                target='_blank'
              >
                GitHub
              </Button>
              <Button
                colored
                href='http://sheetscountrystore.com/'
                target='_blank'
              >
                Visit Site
              </Button>
            </CardActions>

            <CardMenu style={{ color: 'fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          {/*--------------------------------------------------------------------------------------------------------- */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '176px',
                background:
                  'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png) center / cover'
              }}
            />
            <CardText style={{ fontWeight: 'bold', textAlign: 'center' }}>
              Devan Sheets Web Portfolio
            </CardText>
            <CardText style={{ textAlign: 'center' }}>
              The site you are currently sitting on if you are reading this.
              Built using the React JavaScript framework. This is by far my
              favorite framework to use. Check out the code in my GitHub link.
            </CardText>

            <CardActions style={{ textAlign: 'center' }}>
              <Button
                colored
                href='https://github.com/devansheets4/Devan-Sheets-Portfolio'
                target='_blank'
              >
                GitHub
              </Button>
            </CardActions>

            <CardMenu style={{ color: 'fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
          {/*--------------------------------------------------------------------------------------------------------- */}
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1> This is Angular </h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1> This is VueJS </h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1> This is MongoDB </h1>
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
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
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

export default Projects;
