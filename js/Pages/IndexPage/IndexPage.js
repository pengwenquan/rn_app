
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback 
} from 'react-native';
import DataStore from '../../Http/AsyncStorange'
import { Carousel, Icon } from '@ant-design/react-native';
import p2d from '../../Until/p2d'
import Notices from './Notices'
import SellingSummary from './SellingSummary'
import img_arr from '../../Until/img_arr'
import NavigatorUtil from '../../Navigator/NavigatorUtil'

const classifyList = [
  {name: '电阻', img: img_arr.dianzu},
  {name: '电容', img: img_arr.dianrong},
  {name: '电源芯片', img: img_arr.dianyuan},
  {name: '二极管', img: img_arr.erjiguan},
]
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

  rederClassifyItem = () => {
    return classifyList.map(item  => 
      <View style={styles.classifyItem} key={item.name}>
        <Image source={item.img} style={styles.classifyImg} />
        <Text style={styles.classifyName}>{item.name}</Text>
      </View>
    )
  }
  
  renderPresentList = () => {
    const { presentList } = this.state
    return presentList.map(item => 
      <View style={styles.presentItem} key={item.presentImageUrl}>
        <Image source={{uri: item.presentImageUrl}} style={styles.presentImg} />
        <Text style={styles.presentName}>{item.presentName }</Text>
      </View>
    )
  }

  renderBrandList = () => {
    const { brandList } = this.state
    return brandList.map(item =>
      <View style={styles.brandItem} key={item.brandImageUrl}>
        <Image source={{uri: item.brandImageUrl}} style={styles.brandImg} />
      </View>  
    )
  }

  render() {
    const { scrollImageList, mallNoticeList, headBackShareDataModel } = this.state
    return (
      <ScrollView>
        <TouchableWithoutFeedback
          onPress={() =>{NavigatorUtil.goPage(this.props,'searchPage')}}
        >
          <View style={styles.search}>
            <Icon name="search" style={styles.searchIcon} />
            <Text style={styles.searchText}>请输入型号或产品相关信息</Text>
          </View>
        </TouchableWithoutFeedback>
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
          <Notices mallNoticeList={mallNoticeList} />
          <View style={styles.classifyContainer}>
            { this.rederClassifyItem() }
          </View>
          <SellingSummary headBackShareDataModel={headBackShareDataModel} />
          <View style={styles.presentContainer}>
            <Text style={styles.presentTitle}>免费赠品</Text>
            <View style={styles.presentList}>
              { this.renderPresentList() }
            </View>
          </View>
          <View style={styles.brandContainer}>
            <Text style={styles.presentTitle}>品牌列表</Text>
            <View style={styles.brandList}>
              { this.renderBrandList() }
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#e7e7e7',
    margin: p2d(14),
    padding: p2d(16),
    borderRadius: p2d(10),
    flexDirection: 'row',
  },
  searchIcon: {
    color: "#999",
  },
  searchText: {
    color: "#999",
    fontSize: p2d(32)
  },
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
  },
  classifyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center'
  },
  classifyItem: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  classifyImg: {
    width: p2d(120),
    height: p2d(120),
    marginBottom: 5,
  },
  presentContainer: {
    padding: p2d(30)
  },
  presentTitle: {
    fontSize: p2d(30),
    fontWeight: '700',
    color: '#444',
  },
  presentList: {
    marginTop: p2d(20),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  presentItem: {
    width: "30%",
    borderRadius: p2d(10),
    borderWidth: 1,
    borderColor: '#e7e7e7',
    alignItems: 'center',
    padding: p2d(8)
  },
  presentImg: {
    width: p2d(120),
    height: p2d(120),
  },
  presentName: {
    padding: p2d(10),
    textAlign: 'center'
  },
  brandContainer: {
    padding: p2d(30)
  },
  brandList: {
    marginTop: p2d(20),
    borderLeftWidth: 1,
    borderLeftColor: '#e7e7e7',
    borderTopWidth: 1,
    borderTopColor: '#e7e7e7',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  brandItem: {
    width: '25%',
    height: p2d(90),
    borderRightWidth: 1,
    borderRightColor: '#e7e7e7',
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
  },
  brandImg: {
    width: '100%',
    height: '100%'
  }
});

export default IndexPage;