
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import DataStore from '../Http/AsyncStorange'
import { Carousel } from '@ant-design/react-native';
import p2d from '../Until//p2d'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brandList: [], //品牌列表
      scrollImageList: [], // 轮播图
      headBackShareDataModel: [],
      mallNoticeList: [],
      presentList: [],
      productRecommendName: ''
    }
  }

  componentDidMount() {
    const dataStore = new DataStore()
    const url ='https://www.szlcsc.com/app/home/data?v=new'
    dataStore.fetchData(url)
      .then(res => {
        console.log(res, 'redc')
        const { 
          brandList,
          scrollImageList,
          headBackShareDataModel,
          mallNoticeList,
          presentList,
          productRecommendName 
        } = res.data.result
        this.setState({
          brandList,
          scrollImageList,
          headBackShareDataModel,
          mallNoticeList,
          presentList,
          productRecommendName
        })
      })
  }

  renderScrollImageList = (data) => {
    return data.map(item =>  <Image source={{ uri: item.advertisingSrc }} style={styles.containerVertical} key={item.advertisingSrc} />)
    
  }

  render() {
    const { scrollImageList } = this.state
    return (
      <View>
        <Carousel
          style={styles.banner}
          selectedIndex={0}
          autoplay
          infinite
          afterChange={this.onVerticalSelectedIndexChange}
        >
          { this.renderScrollImageList(scrollImageList) }
        </Carousel>
        <View style={styles.mainContainer}>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#fff',
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: p2d(360),
  },
  mainContainer: {
    paddingLeft: p2d(30),
    paddingRight: p2d(30),
  }
});

export default IndexPage;