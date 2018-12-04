import React from 'react';
import Home from './app/views/Home';
import Contact from './app/views/Contact';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Register from './app/views/Register';
import { Video } from './app/views/Video';
import VideoDetail from './app/views/VideoDetail';
import { Login } from './app/views/Login';

const Routes = createStackNavigator({
  Home: {
    screen: Home,
  },
  Contact: {
    screen: Contact
  },
  Lessons: {
    screen: Video
  },
  VideoDetail: {
    screen: VideoDetail
  },
  Register: {
    screen: Register
  },
  Login: {
    screen: Login,
  }
}, {
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(Routes);


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
