import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Acumen extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={3}>
            <div>
            <h4 className='acumenName'>{this.props.acumen}</h4>
            </div>
            
          </Cell>
          <Cell col={9}>
            <h5>{this.props.description}</h5>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Acumen;
