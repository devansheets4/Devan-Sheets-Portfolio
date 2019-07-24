import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from 'react-mdl';
import { Grid, Cell } from 'react-mdl';
import underConstruction from '../assets/underConstruction.jpg';
import portfolio from '../assets/portfolio.PNG';
import IrregularPlant from '../assets/IrregularPlant.PNG';
import Sheets from '../assets/Sheets.PNG';

class Projects extends Component {
  render() {
    return (
      <Grid className='projects-grid' style={{ magin: 'auto' }}>
        <Cell col={3}>
          {/*--------------------------------------------------------------------------------------------------------- */}
          <Card className='cards' shadow={5} style={{ margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '200px',
                backgroundImage: `url(${IrregularPlant})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            />
            <CardText style={{ fontWeight: 'bold', textAlign: 'center' }}>
              Skybest Irregular Plant Web App
            </CardText>
            <CardText style={{ textAlign: 'center' }}>
              Angular, Node, Express, MongoDB
            </CardText>

            <CardActions style={{ textAlign: 'center' }}>
              <Button
                colored
                href='https://youtu.be/3hBDMfZwr80'
                target='_blank'
              >
                Desktop Demo
              </Button>
              <Button
                colored
                href='https://www.youtube.com/watch?v=V5nDs7EM7-0&t=3s'
                target='_blank'
              >
                Mobile Demo
              </Button>
            </CardActions>

            <CardMenu style={{ color: 'fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </Cell>

        <Cell col={3}>
          {/*--------------------------------------------------------------------------------------------------------- */}
          <Card className='cards' shadow={5} style={{ margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '200px',
                backgroundImage: `url(${Sheets})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            />
            <CardText style={{ fontWeight: 'bold', textAlign: 'center' }}>
              Sheets Country Store
            </CardText>

            <CardText style={{ textAlign: 'center' }}>
              HTML5, CSS3, JavaScript
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
        </Cell>

        <Cell col={3}>
          {/*--------------------------------------------------------------------------------------------------------- */}
          <Card className='cards' shadow={5} style={{ margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '200px',
                backgroundImage: `url(${portfolio})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            />
            <CardText style={{ fontWeight: 'bold', textAlign: 'center' }}>
              Devan Sheets Web Portfolio
            </CardText>

            <CardText style={{ textAlign: 'center' }}>
              ReactJS, HTML5, CSS3
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
        </Cell>

        <Cell col={3}>
          {/*--------------------------------------------------------------------------------------------------------- */}
          <Card className='cards' shadow={5} style={{ margin: 'auto' }}>
            <CardTitle
              style={{
                color: 'white',
                height: '200px',
                backgroundImage: `url(${underConstruction})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            />
            <CardText style={{ fontWeight: 'bold', textAlign: 'center' }}>
              Ginger Mountain Construction, LLC
            </CardText>

            <CardText style={{ textAlign: 'center' }}>
              ReactJS, HTML5, CSS3
            </CardText>

            <CardActions style={{ textAlign: 'center' }}>
              <Button
                colored
                href='https://github.com/devansheets4/Ginger-Mountain-Construction'
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
        </Cell>
      </Grid>
    );
  }
}

export default Projects;
