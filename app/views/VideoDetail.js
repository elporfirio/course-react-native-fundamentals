import React, { Component } from "react";
import { View, Text, WebView } from "react-native";

class VideoDetail extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const youtubeId = this.props.navigation.getParam("youtubeId", "SIN VIDEO");
    const youtubeUrl = `https://www.youtube.com/embed/${youtubeId}`;

    return (
      <WebView
        style={{ marginTop: 20 }}
        javaScriptEnabled={true}
        source={{ uri: youtubeUrl }}
      />
    );
  }
}

export default VideoDetail;
