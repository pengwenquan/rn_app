
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
import { connect } from 'react-redux';
import { onThemeChange } from '../Actions/theme'


const NAMES = ["推荐", "视频", "热点", "社会", "娱乐", "军事"]

const _genTabs = (parentProps) => {
  const obj = {}
  NAMES.forEach(item => {
    obj[`${item}`] = {
      screen: props => {
        console.log(props, 'item')
        return <NewsItem {...props} onThemeChange={parentProps.onThemeChange} name={item} />
      },
      navigationOptions: {
        title: item
      }
    }
  })
  return obj
}

const NewsPage = (props) => {
  const TabBackGroud = props.theme
  console.log(props, 'page')
  const Tab = createAppContainer(
    createMaterialTopTabNavigator(_genTabs(props), {
      tabBarOptions: {
        tabStyle: {},
        upperCaseLabel: false,
        scrollEnabled: true,
        style: {
          backgroundColor: TabBackGroud
        },
        indicatorStyle: {
          height: 2,
          backgroundColor: '#fff'
        },
        labelStyle: {
          fontSize: 16,
          marginTop: 6,
          marginBottom: 6,
        },
      }
    })
  )
  return (
    <Tab />
  );
};

const NewsItem = (props) => {
  console.log(props, 'newitem')
  const { onThemeChange } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
      <Button
        title="改变主题"
        onPress={() => {onThemeChange("#ff0")}}
      />
      <Button
        title="详情页"
        onPress={() => { NavigatorUtil.navigation.navigate("DetailPage") }}
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

const mapStateToProps = state => ({
  theme: state.theme.theme
})
const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(onThemeChange(theme))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);