import { combineReducers } from 'redux';
import theme from './theme';
import { rootCom, RootNavigator } from '../Navigator/AppNavigators';

//1、指定默认的state
const navState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(rootCom)
)

const navReducer = (state = navState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  // 如果nextState 为null或未定义，返回原始state
  return nextState || state
}

const index = combineReducers({
  nav: navReducer,
  theme,
})

export default index