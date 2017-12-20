import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default class GetMyLocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name:'My Location',
      lat:'-6.10',
      long: '140.00'
    };
  }
  getMyLocation() {
    console.log('my location')
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.getMyLocation.bind(this)}
          title='Get My Loc'
        />
        <Text style={{flexDirection:'column'}}>{this.state.name}</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{flex:1}}>Latitude: {this.state.lat}</Text>
          <Text style={{flex:1}}>Longitude: {this.state.long}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 24,
  }
});
