// //实际上引入过来的就是axios
// import http from './http'
// import {
//   nowplayingListUri,
//   comingSoonListURi
// } from '@/config/url'
// import { nowplayingListUri } from '../config/url'

// // 暴露出
// export const nowplayingListData = (page = 1) => {
//   return http.get(nowplayingListUri + page)
// }


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


