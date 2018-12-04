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

export class Login extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    username: "",
    password: "",
    passwordConfirm: ""
  };

  cancelLogin = () => {
    Alert.alert("Login cancelled");
    this.props.navigation.navigate("Home");
  };

  loginUser = () => {
    const { username, password } = this.state;

    AsyncStorage.getItem("userLoggedIn", (err, result) => {
      if (result !== "none") {
        Alert.alert("Someone already logged on");
        this.props.navigation.navigate("Home");
      } else {
        AsyncStorage.getItem(username, (err, result) => {
          if (result !== null) {
            if (result !== password) {
              Alert.alert("Password Incorrect");
            } else {
              AsyncStorage.setItem("userLoggedIn", username, (err, result) => {
                Alert.alert(`${username} Logged in`);
                this.props.navigation.navigate("Home");
              });
            }
          } else {
            Alert.alert(`No account for ${username}`);
          }
        });
      }
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState(() => ({ username: text }))}
          value={username}
        />
        <Text style={styles.label}>Enter Username</Text>

        <TextInput
          style={styles.input}
          onChangeText={text => this.setState(() => ({ password: text }))}
          value={password}
        />
        <Text style={styles.label}>Enter Password</Text>

        <TouchableHighlight
          onPress={this.loginUser}
          underlayColor={"#31e981"}
        >
          <Text style={styles.buttons}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.cancelLogin}
          underlayColor={"#31e981"}
        >
          <Text style={styles.buttons}>Cancel</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
