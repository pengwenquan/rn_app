import {
  createAppContainer,
  createSwitchNavigator,
  
} from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'

import WelcomePage from '../Pages/WelcomePage'
import HomePage from '../Pages/HomePage'
import DetailPage from '../Pages/DetailPage'
import LoginPage from '../Pages/LoginPage'

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

export default createAppContainer(
  createSwitchNavigator({
    Init,
    Main,
    Login
  })
)