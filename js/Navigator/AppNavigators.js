import {
  createAppContainer,
  createSwitchNavigator,
  
} from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'

import WelcomePage from '../Pages/WelcomePage'
import HomePage from '../Pages/HomePage'
import DetailPage from '../Pages/DetailPage'
import LoginPage from '../Pages/LoginPage'
import { connect } from "react-redux";
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from "react-navigation-redux-helpers";

export const rootCom = "Init"; //设置根路由

//欢迎页
const Init = createStackNavigator({
  Init: {
    screen: WelcomePage,
    navigationOptions: {
      header: null
    }
  }
})

//主页
const Main = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null
    }
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
     
    }
  },
})


//登录页
const Login = createStackNavigator({
  LoginPage: {
    screen: LoginPage,
    navigationOptions: {
      header: null
    }
  }
})

export const RootNavigator =  createAppContainer(
  createSwitchNavigator({
    Init,
    Main,
    Login
  })
)

const AppWithNavigationState = createReduxContainer(RootNavigator, 'root')

export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav
)

// state到props的映射关系
const mapStateToProps = state => {
  return {
    state: state.nav
  }
}

//使用redux的connect函数再封装一个高阶组件，连接react组件与redux store
export default connect(mapStateToProps)(AppWithNavigationState)