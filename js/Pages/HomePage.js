
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import NewsPage from './NewsPage'
import MyPage from './MyPage'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import NavigatorUtil from '../Navigator/NavigatorUtil'

const TABS = {
  NewsPage: {
    screen: NewsPage,
    navigationOptions: {
      tabBarLabel: '新闻',
      tabBarIcon: ({ tintColor, focused }) => (
        <FontAwesome name={"newspaper-o"} size={26} style={{ color: tintColor }} />
        )
    }
  },

  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor, focused }) => (
        <FontAwesome name={"user"} size={26} style={{ color: tintColor }} />
        )
    }
  }
}

const HomePage = (props) => {
  NavigatorUtil.navigation = props.navigation
  const Tab = createAppContainer(createBottomTabNavigator(TABS))
  return (
   <Tab />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  }
});

export default HomePage;