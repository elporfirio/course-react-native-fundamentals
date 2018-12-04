import React, { Component } from "react";
import {
  StyleSheet,
  Alert,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  AsyncStorage
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: "45%",
    paddingTop: "10%"
  },
  heading: {
    fontSize: 16,
    flex: 1
  },
  inputs: {
    flex: 1,
    width: "80%",
    padding: 10
  },
  buttons: {
    marginTop: 15,
    fontSize: 16
  },
  labels: {
    paddingBottom: 10
  }
});

class Register extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    username: "",
    password: "",
    passwordConfirm: ""
  };

  cancelRegister = () => {
    Alert.alert("Registration cancelled");
    this.props.navigation.navigate("Home");
  };

  registerAccount = () => {
    const { username, password, passwordConfirm } = this.state;
    if (!username) {
      Alert.alert("Please enter username");
    } else if (password !== passwordConfirm) {
      Alert.alert("Passwords do not match");
    } else {
      AsyncStorage.getItem(username, (err, result) => {
        if (result !== null) {
          Alert.alert(`${username} already exists`);
        } else {
          AsyncStorage.setItem(username, password, (err, result) => {
            Alert.alert(`${username} account created`);
            this.props.navigation.navigate("Home");
          });
        }
      });
    }
  };

  render() {
    const { username, password, passwordConfirm } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Register Account</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState(() => ({ username: text }))}
          value={username}
        />
        <Text style={styles.label}>Enter Username</Text>

        <TextInput
          style={styles.inputs}
          onChangeText={text => this.setState(() => ({ password: text }))}
          value={password}
        />
        <Text style={styles.label}>Enter Password</Text>

        <TextInput
          style={styles.inputs}
          onChangeText={text =>
            this.setState(() => ({ passwordConfirm: text }))
          }
          value={passwordConfirm}
        />
        <Text style={styles.label}>Enter Password Confirm</Text>

        <TouchableHighlight
          onPress={this.registerAccount}
          underlayColor={"#31e981"}
        >
          <Text style={styles.buttons}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.cancelRegister}
          underlayColor={"#31e981"}
        >
          <Text style={styles.buttons}>Cancel</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Register;
