import React, { Component } from "react";
import { TouchableWithoutFeedback, View, Text, Image } from "react-native";

class TubeItem extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.onPress({youtubeId: this.props.id})}>
        <View style={{ paddinTop: 20, alignItems: "center" }}>
          <Image
            style={{ width: "100%", height: 200 }}
            source={{ uri: this.props.imageSrc }}
          />
          <Text>{this.props.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default TubeItem;
