import React, { Component } from "react";
import { StyleSheet, Text, View, Platform, Image, AsyncStorage } from "react-native";

const styles = StyleSheet.create({
  headText: {
    textAlign: "right",
    color: "#ffffff",
    fontSize: 20
  },
  headStyle: {
    paddingTop: 30,
    paddingRight: 10,
    backgroundColor: Platform.OS === 'ios' ? "#CCBBAA" : "#35605A",
    ///
    flexDirection: 'row',
    flex: 2,
    borderBottomWidth: 2,
    borderColor: '#000'
  },
  logoStyle: {
    flex: 1,
    width: undefined, // Toma las medidas del flex
    height: undefined,
  }
});

class Header extends Component {
  state = {
    isLoggedIn: false,
    loggedUser: false,
  };

  toggleUser = () => {
    if(this.state.isLoggedIn) {
      AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
        this.setState(() => ({
          isLoggedIn: false,
          loggedUser: false,
        }));
        Alert.alert('User logged pout');
      })
    } else {
      // this.props.navigation.navigate('Login');
      this.props.onPress();
    }
  };

  componentDidMount() {
    AsyncStorage.getItem('userLoggedIn', (err, result) => {
      if(result === 'none'){
        console.log('NONE');
      } else if (result === null ){
        AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
          console.log('Setuser to NONE');
        })
      } else {
        this.setState(() => ({
          isLoggedIn: true,
          loggedUser: result,
        }))
      }
    });
  }

  render() {
    let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message;
    return (
      <View style={styles.headStyle}>
        <Image style={styles.logoStyle} source={{uri: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com'}}/>
        <Text style={styles.headText} onPress={() => { this.toggleUser(); this.props.onPress()}}>
          {display}
        </Text>
      </View>
    );
  }
}

export default Header;
