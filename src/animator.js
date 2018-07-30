import React, { Component } from 'react';

export default class Animator extends Component {
  state = {
    mounted: true,
  };

  componentDidUpdate(_, prevState) {
    if (!this.props.show) {
      setTimeout(() => {
        this.setState({ mounted: false });
      }, this.props.time);
    }
  }

  render() {
    return (
      this.state.mounted && this.props.children(!this.props.show, this.props.time / 1000)
    );
  }
}
