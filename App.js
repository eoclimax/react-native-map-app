import React, {Component} from 'react';
import {StyleSheet, View, ToastAndroid, Alert} from 'react-native';
import MapView, {PROVIDER_GOOGLE, MarkerAnimated} from 'react-native-maps';
import GeoFencing from 'react-native-geo-fencing';
import Geolocation from '@react-native-community/geolocation';

const LATITUDE_DELTA = 0.0015;
const LONGITUDE_DELTA = 0.00121;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        latitude: 10.785231,
        longitude: 106.693318,
      },
      polygon: [
        {latitude: 10.785231, longitude: 106.693109},
        {latitude: 10.785394, longitude: 106.693318},
        {latitude: 10.785269, longitude: 106.693543},
        {latitude: 10.785058, longitude: 106.693307},
        {latitude: 10.785231, longitude: 106.693109},
        // last point will repeat first point
      ],
      timestamp: null,
    };
  }
  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  componentDidMount() {
    this._isMounted = true;
    console.log('--------------------ComponentDidMount--------------------');
    //Get current location of user
    Geolocation.watchPosition(
      position => {
        console.log('####SET STATE####');
        this.setState({
          currentLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          timestamp: position.timestamp,
        });
        console.log('####SET STATE SUCCESS####');
        console.log('####Current Location: ', this.state.currentLocation);
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 50000},
    );
  }

  // componentWillUnmount() {
  //   this._isMounted = false;
  // }

  // shouldComponentUpdate() {
  //   Geolocation.watchPosition(
  //     position => {
  //       if (
  //         this.state.currentLocation.latitude === position.coords.latitude &&
  //         this.state.currentLocation.longitude === position.coords.longitude
  //       ) {
  //         return false;
  //       } else {
  //         this.setState({
  //           currentLocation: {
  //             latitude: position.coords.latitude,
  //             longitude: position.coords.longitude,
  //           },
  //           timestamp: position.timestamp,
  //         });
  //       }
  //     },
  //     error => {
  //       console.log(error);
  //     },
  //     {enableHighAccuracy: true, timeout: 50000},
  //   );
  //   return true;
  // }

  componentDidUpdate() {
    // Check - Is user inside the geofence & alert
    GeoFencing.containsLocation(this.state.currentLocation, this.state.polygon)
      .then(() => {
        console.log('-----Check Geofence------');
        Alert.alert('User is inside the Geofence! Please get out of there!');
        console.log('User is within area');
      })
      .catch(() => {
        console.log('-----Check Geofence------');
        ToastAndroid.show('User is not within area', ToastAndroid.SHORT);
        console.log('User is not within area');
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: this.state.currentLocation.latitude,
            longitude: this.state.currentLocation.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          Region={this.getMapRegion()}
          showsUserLocation
          followUserLocation={true}
          // loadingEnabled
          // zoomEnabled
        >
          {/* //Polygon Geofence */}
          <MapView.Polygon
            coordinates={this.state.polygon}
            strokeWidth={3}
            strokeColor={'red'}
            // fillColor={'rgba(230,238,255,0.5)'}
          />
          {/* // Marker Add */}
          <MarkerAnimated coordinate={this.state.currentLocation} />
          <MapView.Marker
            coordinate={this.state.polygon[0]}
            title={'Point0'}
            description={'Check point'}
          />
          <MapView.Marker
            coordinate={this.state.polygon[1]}
            title={'Point1'}
            description={'Check point'}
          />
          <MapView.Marker
            coordinate={this.state.polygon[2]}
            title={'Point2'}
            description={'Check point'}
          />
          <MapView.Marker
            coordinate={this.state.polygon[3]}
            title={'Point3'}
            description={'Check point'}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

// export default App;
