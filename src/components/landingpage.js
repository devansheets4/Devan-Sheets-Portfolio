import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithubSquare,
  faGoogle
} from '@fortawesome/free-brands-svg-icons';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src='http://chittagongit.com/download/316595'
              alt='avatar'
              className='avatar-img'
            />

            <div className='banner-text'>
              <h1>Full Stack Web Developer</h1>
              <hr />

              <p>
                HTML | CSS | Bootstrap | JavaScript | React | React Native |
                Angular | NodeJS | Express | MongoDB
              </p>

              <div className='social-links'>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/devan-sheets/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon className='icons' icon={faLinkedin} />
                </a>

                {/* Github */}
                <a
                  href='https://github.com/devansheets4'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon className='icons' icon={faGithubSquare} />
                </a>

                {/* Gmail */}
                <a
                  href='www.google.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon className='icons' icon={faGoogle} />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
