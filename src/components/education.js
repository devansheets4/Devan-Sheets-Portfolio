import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <p>
              {this.props.startYear} - {this.props.endYear}
            </p>
          </Cell>
          <Cell col={8}>
            <h3 style={{ marginTop: '0px' }}>{this.props.schoolName}</h3>
            <h5>{this.props.schoolDescription}</h5>
            <h5>{this.props.schoolConcentration}</h5>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Education;
