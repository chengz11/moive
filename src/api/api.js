
import http from './http'
import { nowPlayingListUri } from '../config/url'
import { comingSoonListUri } from '../config/url'
import { moiveDetailUrl } from '../config/url'
import { jijiangDetailUrl } from '../config/url';
import { cityListUrl } from '../config/url';
import { cinemaListUrl } from '../config/url';
import { loginUrl } from '../config/url';


//登录
export const userLogin = (data) => {
  //loginurl在上面引入了
  return http.post(loginUrl, data)
}


// 暴露出
export const nowplayingListData = (page = 1) => {
  http.defaults.headers.info = ""; //跳转到http的if判断

  return http.get(nowPlayingListUri + page)
}

export const comingSoonListData = (page = 1) => {
  http.defaults.headers.info = ""; //跳转到http的if判断

  return http.get(comingSoonListUri + page)
}
//请求详情页
export const moiveDetailData = (filmId) => {
  http.defaults.headers.info = "info"; //跳转到http的if判断
  return http.get(moiveDetailUrl + filmId);
}


export const jijiangDetailData = (filmId) => {
  http.defaults.headers.info = "info";
  return http.get(jijiangDetailUrl + filmId);
}
export const cinemaListData = (cityId) => {
  http.defaults.headers.info = "cinema";
  return http.get(cinemaListUrl + cityId)
}

//获取城市列表数据
export const cityListData = async () => {
  http.defaults.headers.info = "city";
  let ret = await http.get(cityListUrl);
  let cities = ret.data.data.cities
  var codeList = []
  var daraList = []
  var indexList = []
  for (let i = 65; i <= 90; i++) {
    codeList.push(String.fromCharCode(i))
  }
  codeList.forEach((ele) => {
    let temArr = cities.filter((item) => ele.toLowerCase() == item.pinyin.substr(0, 1))
    if (temArr.length > 0) {
      indexList.push(ele)
      daraList.push({ index: ele, data: temArr })
    }
  })
  return Promise.resolve([daraList, indexList])
}