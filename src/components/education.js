import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <h5>
              {this.props.startYear} - {this.props.endYear}
            </h5>
          </Cell>
          <Cell col={8}>
            <h2 style={{ marginTop: '0px' }}>{this.props.schoolName}</h2>
            <h5>{this.props.schoolDescription}</h5>
            <h5>{this.props.schoolConcentration}</h5>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Education;
