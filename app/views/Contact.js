import React, { Component } from "react";
import Header from "../sections/Header";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Alert
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%',
  },
  heading: {
    fontSize: 16,
    flex: 1,
  },
  input: {
    flex: 1,
    width: '80%',
    padding: 10,
  },
  multiInput: {
    flex: 2,
    width: '90%',
    paddingTop: 20,
  },
  buttons: {
    marginTop: 15,
    fontSize: 16
  }
});

class Contact extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    msg: "Enter Message",
    name: "Enter Name",
    email: "Enter Email Address"
  };

  clearFields = () => this.setState(() => ({ name: "", msg: "", email: "" }));

  sendMessage = () => {
    Alert.alert(this.state.name, this.state.msg);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Header onPress={() => navigate('Login')} message = 'Press to login'/>
        <Text style={styles.heading}>Contact us</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState(() => ({ name: text }))}
          value={this.state.name}
        />
        <TextInput
          style={styles.multiInput}
          onChangeText={text => this.setState(() => ({ msg: text }))}
          value={this.state.msg}
          multiline
          numberOfLines={4}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState(() => ({ email: text }))}
          value={this.state.email}
        />

        <TouchableHighlight onPress={this.sendMessage} underlayColor={"#31e981"}>
          <Text style={styles.buttons}>
            Send Message
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.clearFields} underlayColor={"#31e981"}>
          <Text style={styles.buttons}>
            Reset Form
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Contact;
