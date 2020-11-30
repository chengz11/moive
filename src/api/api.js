


//请求数据在这！！！


//实际上引入过来的就是axios
import http from './http'
// import {
//   nowplayingListUri,
//   comingsoonListURi
// } from '@/config/url'
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
  http.defaults.headers.info = "info"; //跳转到http的if判断
  return http.get(jijiangDetailUrl + filmId);
}

// export const comingSoonListData = (pageNum) => {
//   return http.get(comingSoonListUri + pageNum);
// };

export const cinemaListData = (cityId) => {
  http.defaults.headers.info = "cinema"; //跳转到http的if判断
  return http.get(cinemaListUrl + cityId)
}

//获取城市列表数据
export const cityListData = async () => {
  http.defaults.headers.info = "city"; //跳转到http的if判断
  let ret = await http.get(cityListUrl);
  // console.log(ret);//需要在vue页面发送请求数据
  let cities = ret.data.data.cities
  // console.log('cities', cities);
  var codeList = [] //用来接收ABCD全部的26个英文字母
  var daraList = [] //城市名称信息
  var indexList = []//经过筛选的abcd  
  for (let i = 65; i <= 90; i++) {
    codeList.push(String.fromCharCode(i))// push相当于在codeList添加内容在里面
  }
  codeList.forEach((ele) => {//提取出所有的英文字母
    //filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
    // array.filter(function(currentValue,index,arr), thisValue)
    //toLowerCase()小写
    //获取出所有ele中英文字母和所有城市小写首字母相等的条件，并返回一个新数组
    let temArr = cities.filter((item) => ele.toLowerCase() == item.pinyin.substr(0, 1))
    console.log(ele);
    console.log(temArr);
    if (temArr.length > 0) {
      indexList.push(ele)//用来接收里面变量
      daraList.push({ index: ele, data: temArr })//接收一个对象
    }
  })
  return Promise.resolve([daraList, indexList])
}