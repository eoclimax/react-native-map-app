/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const rectangle = {
  width: 300,
  height: 100,
  backgroundColor: 'green',
};

// const App: () => React$Node = () => {
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  render() {
    // const {isActive} = this.state;
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: '90%',
  },
});

// export default App;
