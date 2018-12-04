import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  heroImage: {
    width: undefined,
    height: undefined,
    flex: 6,
  }
});

class Hero extends Component {
  render() {
    return (
      <Image
        style={styles.heroImage}
        source={{ uri: "https://via.placeholder.com/600x100" }}
      />
    );
  }
}

export default Hero;
