import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithubSquare,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import avatar from '../assets/avatar.jpg';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img src={avatar} alt='avatar' className='avatar-img' />

            <div className='banner-text'>
              <h1>Hi! I'm an aspiring Software Engineer</h1>
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
                  <FontAwesomeIcon
                    className='icons'
                    id='linkedin'
                    icon={faLinkedin}
                  />
                </a>

                {/* GitHub */}
                <a
                  href='https://github.com/devansheets4'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon
                    className='icons'
                    id='github'
                    icon={faGithubSquare}
                  />
                </a>

                {/* YouTube */}
                <a
                  href='https://www.youtube.com/channel/UCOPwI77L2b99JGE5Wl6hw-g?view_as=subscriber'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon
                    className='icons'
                    id='youtube'
                    icon={faYoutube}
                  />
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
