import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import TubeItem from "../component/TubeItem";

export class Video extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    listLoaded: false
  };

  componentDidMount() {
    return fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&q=el+precio+de+la+historia&type=video&key=AIzaSyDWUiI-CbHqummwHwMDZueRF8L9eh-9e8s"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(() => ({
          listLoaded: true,
          videoList: Array.from(responseJson.items)
        }));
      })
      .catch(err => {
        console.error(err);
      });
  }

  navigateDetail = ({ youtubeId }) => {
    const { navigate } = this.props.navigation;
    navigate("VideoDetail", { youtubeId });
  };

  render() {
    const { listLoaded, videoList } = this.state;
    return (
      <View>
        {listLoaded && (
          <View style={{ paddinTop: 30 }}>
            <FlatList
              keyExtractor={item => item.id.videoId}
              data={videoList}
              renderItem={({ item }) => (
                <TubeItem
                  id={item.id.videoId}
                  title={item.snippet.title}
                  imageSrc={item.snippet.thumbnails.high.url}
                  onPress={this.navigateDetail}
                />
              )}
            />
          </View>
        )}

        {!listLoaded && (
          <View style={{ paddingTop: 30 }}>
            <Text>Loading</Text>
          </View>
        )}
      </View>
    );
  }
}
