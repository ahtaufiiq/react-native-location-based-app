import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class AddLocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      lat:'',
      long:''
    };
  }
  goToResults(dataTextInput) {
    this.props.data(dataTextInput)
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={(text) => {this.setState({nama: text})}}
          value={this.state.nama}
          style={styles.inputName}
        />
        <View style={styles.coords}>
          <TextInput
            onChangeText={(lat) => {this.setState({lat: lat})}}
            value={this.state.lat}
            style={{flex:1}}
          />
          <TextInput
            onChangeText={(long) => {this.setState({name: long})}}
            value={this.state.long}
            style={{flex:1}}
          />
        </View>
        <Button
          onPress={this.goToResults.bind(this, this.state.nama)}
          title='Kirim ke HomeJS'
        />
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
  },
  inputName:{
    flexDirection: 'column'
  },
  coords:{
    flexDirection:'row'
  }
});
