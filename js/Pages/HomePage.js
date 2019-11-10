
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import IndexPage from './IndexPage/IndexPage'
import MyPage from './MyPage/MyPage'
import ClassifyPage from './ClassifyPage/ClassifyPage'
import CartPage from './CartPage/CartPage'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import NavigatorUtil from '../Navigator/NavigatorUtil'

const TABS = {
  IndexPage: {
    screen: IndexPage,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor, focused }) => (
        <FontAwesome name={"home"} size={26} style={{ color: tintColor }} />
        )
    }
  },

  ClassifyPage: {
    screen: ClassifyPage,
    navigationOptions: {
      tabBarLabel: '分类',
      tabBarIcon: ({ tintColor, focused }) => (
        <FontAwesome name={"th"} size={26} style={{ color: tintColor }} />
        )
    }
  },

  CartPage: {
    screen: CartPage,
    navigationOptions: {
      tabBarLabel: '购物车',
      tabBarIcon: ({ tintColor, focused }) => (
        <FontAwesome name={"shopping-cart"} size={26} style={{ color: tintColor }} />
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