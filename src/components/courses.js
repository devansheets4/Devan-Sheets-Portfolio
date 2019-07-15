import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Courses extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <h5>{this.props.course}</h5>
            <h5>{this.props.course1}</h5>
            <h5>{this.props.course2}</h5>
            <h5>{this.props.course3}</h5>
          </Cell>
          <Cell col={8}>
            <h5>{this.props.course4}</h5>
            <h5>{this.props.course5}</h5>
            <h5>{this.props.course6}</h5>
            <h5>{this.props.course7}</h5>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Courses;
