import React, {Component} from 'react';
import {View} from 'react-native';

export default class Avatar extends Component {
  render() {
    const {width, height, boderRaius, backgroundColor} = this.props;
    return (
      <View
        style={{
          width,
          height,
          boderRaius,
          backgroundColor,
        }}
      />
    );
  }
}
