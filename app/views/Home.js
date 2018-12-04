import React, { Component } from 'react';
import Header from '../sections/Header';
import { View, StyleSheet } from 'react-native';
import Hero from '../sections/Hero';
import Menu from '../sections/Menu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FEA',
  }
});
class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Header onPress={() => navigate('Login')} message = 'Press to login'/>
        <Hero/>
        <Menu navigate={navigate}/>
      </View>
    );
  }
}

export default Home;
