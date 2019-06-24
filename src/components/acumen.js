import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Acumen extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <h5>{this.props.acumen}</h5>
            <h5>{this.props.acumen2}</h5>
            <h5>{this.props.acumen3}</h5>
            <h5>{this.props.acumen4}</h5>
            <h5>{this.props.acumen5}</h5>
            <h5>{this.props.acumen6}</h5>
          </Cell>
          <Cell col={8}>
            <h5>{this.props.description}</h5>
            <h5>{this.props.description2}</h5>
            <h5>{this.props.description3}</h5>
            <h5>{this.props.description4}</h5>
            <h5>{this.props.description5}</h5>
            <h5>{this.props.description6}</h5>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Acumen;
