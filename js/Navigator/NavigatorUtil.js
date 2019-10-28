export default class NavigatorUtil {
  static goPage(props, page) {
    const Navigation = NavigatorUtil.avigation
    Navigation.navigate(page, {
      ...props
    })
  }

  // 返回上一页
  static goBack(props) {
    const { navigation } = props
    navigation.goBack();
  }

  //回到主页
  static goHomePage(params) {
    const { navigation } = params
    navigation.navigate('Main');  
  }
}