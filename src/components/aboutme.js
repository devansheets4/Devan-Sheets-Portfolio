import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className='about-header' col={4}>
            <div>
              <img
                src='https://static1.squarespace.com/static/56a7b1d0841aba91dc0e825a/t/587fa133d482e9a27b14591a/1484759361852/'
                alt='logo'
              />
            </div>
          </Cell>

          <Cell
            className='about-header-right'
            style={{ margin: 'auto' }}
            col={8}
          >
            <div id='bachelors'>
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
                src='https://d3q6qq2zt8nhwv.cloudfront.net/platform/dbb1a59e6e594c7c8119a9220968a767.png'
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
                src='https://apprecs.org/gp/images/app-icons/300/df/com.skillshare.Skillshare.jpg'
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
                src='https://cdn-images-1.medium.com/max/1200/1*zQQIXt4AAIUYQD1umtwEZg.jpeg'
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
                src='https://png.pngtree.com/svg/20170629/660377369c.svg'
                alt='free-code-camp'
                className='cont-ed-logo'
              />
            </a>
          </Cell>

          <Cell col={1}>
            <img
              src='https://www.stickpng.com/assets/images/5847f5bdcef1014c0b5e489c.png'
              alt='html5'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src='https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png'
              alt='css3'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png'
              alt='javascript'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src='https://cdn.auth0.com/blog/angular2-series/angular2-logo.png'
              alt='angular'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src='https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png'
              alt='react'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src='http://pluspng.com/img-png/nodejs-logo-png--375.png'
              alt='nodejs'
              className='cont-ed-logo'
            />
          </Cell>
          <Cell col={1}>
            <img
              src='https://www.logolynx.com/images/logolynx/1d/1dc095a3727268179049d6cb7f9b7212.png'
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
              src='https://image.flaticon.com/icons/svg/38/38401.svg'
              alt='github'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src='https://seeklogo.com/images/B/bitbucket-logo-D072214725-seeklogo.com.png'
              alt='bitbucket'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src='https://www.stickpng.com/assets/images/5847f989cef1014c0b5e48bf.png'
              alt='gitkracken'
              className='cont-ed-logo'
            />
          </Cell>

          <Cell col={1}>
            <img
              src='https://dashboard.snapcraft.io/site_media/appmedia/2019/05/code_ozwVHSV.png'
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
