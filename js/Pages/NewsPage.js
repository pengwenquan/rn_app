
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import NavigatorUtil from '../Navigator/NavigatorUtil'

const NAMES = ["推荐", "视频", "热点", "社会", "娱乐", "军事"]

const _genTabs = () => {
  const obj = {}
  NAMES.forEach(item => {
    obj[`${item}`] = {
      screen: props => {
        return <NewsItem {...props} name={item} />
      }
    }
  })
  return obj
}

const NewsPage = () => {
  const Tab = createAppContainer(
    createMaterialTopTabNavigator(_genTabs())
  )
  return (
    <Tab />
  );
};

const NewsItem = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
      <Button
        title="跳到详情页"
        onPress={() => {NavigatorUtil.navigation.navigate('DetailPage')}}
      />
    </View>
  )
}

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

export default NewsPage;