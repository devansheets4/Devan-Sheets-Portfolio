import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import charlotte from '../assets/charlotte.png';

import freecodecamp from '../assets/freecodecamp.png';
import udemy from '../assets/udemy.png';
import skillshare from '../assets/skillshare.jpg';
import youtube from '../assets/youtube.png';

import html5 from '../assets/html5.png';
import css3 from '../assets/css3.png';
import javascript from '../assets/javascript.png';
import angular from '../assets/angular.png';
import react from '../assets/react.png';
import nodejs from '../assets/nodejs.png';
import mongodb from '../assets/mongodb.png';

import github from '../assets/github.png';
import bitbucket from '../assets/bitbucket.png';
import gitkracken from '../assets/gitkracken.png';
import vscode from '../assets/vscode.png';

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className='about-header' col={4}>
            <div>
              <img
                src={charlotte}
                alt='charlotte-logo'
              />
            </div>
          </Cell>

          <Cell
            className='about-header-right'
            style={{ margin: 'auto' }}
            col={8}
          >
            <div>
              <h2>Bachelors Degree in Computer Science</h2>
            </div>
          </Cell>
          <Cell className='cont-education' col={8}>
            <div>
              <h2>Continuing Education Courses</h2>
            </div>
          </Cell>
          <Cell col={1}>
            <a
              href='https://www.udemy.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={udemy}
                alt='udemy'
                className='cont-ed-logo'
              />
            </a>
          </Cell>
          <Cell col={1}>
            <a
              href='https://www.skillshare.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={skillshare}
                alt='skillshare'
                className='cont-ed-logo'
              />
            </a>
          </Cell>
          <Cell col={1}>
            <a
              href='https://www.youtube.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={youtube}
                alt='youtube'
                className='cont-ed-logo'
              />
            </a>
          </Cell>
          <Cell col={1}>
            <a
              href='https://www.freecodecamp.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={freecodecamp}
                alt='free-code-camp'
                className='cont-ed-logo'
              />
            </a>
          </Cell>

          <Cell col={1}>
            <img
              src={html5}
              alt='html5'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src={css3}
              alt='css3'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src={javascript}
              alt='javascript'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src={angular}
              alt='angular'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src={react}
              alt='react'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src={nodejs}
              alt='nodejs'
              className='cont-ed-logo'
            />
          </Cell>
          <Cell col={1}>
            <img
              src={mongodb}
              alt='mongodb'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell className='front-languages' col={5}>
            <div>
              <h2>Web Development Languages</h2>
            </div>
          </Cell>

          <Cell className='source-control' col={8}>
            <h2>Source Control</h2>
          </Cell>

          <Cell col={1}>
            <img
              src={github}
              alt='github'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src={bitbucket}
              alt='bitbucket'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src={gitkracken}
              alt='gitkracken'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src={vscode}
              alt='vscode'
              className='cont-ed-logo'
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
