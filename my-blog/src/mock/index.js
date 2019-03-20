import Mock from 'mockjs'
import {getbloglist} from './blog'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 1000
})

//Mock.mock(/posts/, getbloglist)
export default Mock
