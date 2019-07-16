import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Languages extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={12}>
            <h3>{this.props.lang1}</h3>
          </Cell>
          <Cell col={12}>
            <h3>{this.props.lang2}</h3>
          </Cell>
          <Cell col={12}>
            <h3>{this.props.lang3}</h3>
          </Cell>
          <Cell col={12}>
            <h3>{this.props.lang4}</h3>
          </Cell>
          <Cell col={12}>
            <h3>{this.props.lang5}</h3>
          </Cell>
          <Cell col={12}>
            <h3>{this.props.lang6}</h3>
          </Cell>
          <Cell col={12}>
            <h3>{this.props.lang7}</h3>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Languages;
