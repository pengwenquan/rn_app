import AsyncStorage from "@react-native-community/async-storage";

export default class DataStore {
  static checkTimestamp(timestamp) {
    const currentDate = new Date();
    const targetDate = new Date();
    targetDate.setTime(timestamp)
    if(currentDate.getMonth() !== targetDate.getMonth()) return false 
    if(currentDate.getDate() !== targetDate.getDate()) return false 
    if(currentDate.getHours() - targetHours.getHours() > 4) return false 
    return true
  } 

  fetchData(url) {
    return new Promise((resolve, reject) => {
      // 获取本地数据
      this.fetchLocalData(url)
        .then(wrapdata => {
          //检查有效期
          if(wrapdata && DataStore.checkTimestamp(wrapdata.timestamp)) {
            resolve(wrapdata)
          }else {
            //获取网络数据
            this.fetchNetData(url)
              .then(data => {
                resolve(this._wrapData(data))
              })
              .catch(e => {
                reject(e)
              })
          }
        })
        .catch(error => {
          //获取网络数据
          this.fetchNetData(url)
          .then(data => {
            resolve(this._wrapData(data))
          })
          .catch(e => {
            reject(e)
          })
        })
    })
  }

  //数据存储
  saveData(url, data, callback) {
    if(!data || !url) return
    AsyncStorage.setItem(url, JSON.stringify(this._wrapData(data)), callback)
  }

  //给数据添加一个时间戳
  _wrapData(data) {
    return { data, timestamp: new Date().getTime() }; //这里写了本地时间，时间还是服务器时间靠谱
  }

  fetchLocalData(url) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(url, (err, result) => {
        if(!err) {
          resolve(JSON.parse(result))
        }else {
          reject(err)
          console.log(err)
        }
      })
    })
  }

  fetchNetData(url) {
    console.log(url)
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if(response.ok) {
            return response.json()
          }
          throw new Error("network was not ok")
        })
        .then(responseData => {
          this.saveData(url, responseData)
        })
        .catch(e => {
          reject(e)
        })
        
    })
  }
}