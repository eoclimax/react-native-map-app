/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Avatar} from './src/components';
import {tsConstructorType} from '@babel/types';

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
    const {isActive} = this.state;
    return (
      // // Lesson: View Component
      // <View>
      //   <Avatar
      //     width={50}
      //     height={50}
      //     boderRadius={50 / 2}
      //     backgroundColor={'red'}
      //   />
      //   <Avatar
      //     width={50}
      //     height={50}
      //     boderRadius={50 / 2}
      //     backgroundColor={'red'}
      //   />
      // </View>

      //Lesson: Stylesheet - Style inline
      <View>
        <View
          style={{
            width: 200,
            height: 100,
            backgroundColor: 'black',
          }}></View>
        {/* Stylesheet - Style Objects */}
        <View style={rectangle}></View>
        {/* Stylesheet - StyleSheet.create only */}
        <View style={styles.header}></View>
        {/* Stylesheet - StyleSheet.create + array object */}
        <View style={[styles.header, styles.backgroundRed]} />
        {/* Stylesheet - StyleSheet.create -  mix object vs inline */}
        <View style={[styles.header, {borderColor: 'yellow'}]} />

        {/* Stylesheet - StyleSheet.create -  condition style */}
        <View
          style={[
            styles.header,
            {borderColor: 'yellow'},
            isActive ? styles.backgroundRed : styles.backgroundGreen,
          ]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    borderWidth: 10,
    // borderColor: 'gray',
    marginTop: 4,
  },
  backgroundRed: {
    backgroundColor: 'red',
  },
  backgroundGreen: {
    backgroundColor: 'green',
  },
});

// export default App;
