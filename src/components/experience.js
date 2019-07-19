import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
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
            <h4
              style={{
                marginTop: '0px',
                fontWeight: 'bold',
                textDecoration: 'underline'
              }}
            >
              {this.props.jobName}
            </h4>
            <h5>{this.props.jobDescription}</h5>
            <h5>{this.props.jobDescription2}</h5>
            <h5>{this.props.jobDescription3}</h5>
            <h5>{this.props.jobDescription4}</h5>
            <h5>{this.props.jobDescription5}</h5>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Experience;
