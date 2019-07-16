import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import avatar from '../assets/avatar.jpg';

class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2> Devan Sheets </h2>
            <img src={avatar} alt='avatar' style={{ height: '250px' }} />

            <p style={{ width: '50%', margin: 'auto', paddingTop: '1em' }}>
              Please feel free to reach out to me for any project you may have
              in mind! Website portfolios, small business, product showcasing, etc!
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <div>
                      <FontAwesomeIcon
                        className='contact-icons'
                        icon={faPhoneSquare}
                      />
                      (336) 977-3622
                    </div>
                  </ListItemContent>
                </ListItem>
                {/*----------------------------------------------------------------------------- */}
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <FontAwesomeIcon
                      className='contact-icons'
                      icon={faEnvelope}
                    />
                    devansheets4@gmail.com
                  </ListItemContent>
                </ListItem>
                {/*----------------------------------------------------------------------------- */}
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '30px', fontFamily: 'Anton' }}
                  >
                    <FontAwesomeIcon className='contact-icons' icon={faSkype} />
                    devansheets4
                  </ListItemContent>
                </ListItem>
                {/*----------------------------------------------------------------------------- */}
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
