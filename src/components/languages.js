import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Languages extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={12}>
            <h2>{this.props.lang1}</h2>
          </Cell>
          <Cell col={12}>
            <h2>{this.props.lang2}</h2>
          </Cell>
          <Cell col={12}>
            <h2>{this.props.lang3}</h2>
          </Cell>
          <Cell col={12}>
            <h2>{this.props.lang4}</h2>
          </Cell>
          <Cell col={12}>
            <h2>{this.props.lang5}</h2>
          </Cell>
          <Cell col={12}>
            <h2>{this.props.lang6}</h2>
          </Cell>
          <Cell col={12}>
            <h2>{this.props.lang7}</h2>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Languages;
