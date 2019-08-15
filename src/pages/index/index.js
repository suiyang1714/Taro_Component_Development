import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.scss'

import ComponentNavigatorBar from '../../components/componentNavigatorBar/index'

@connect(({ globalData }) => ({
  globalData
}), (dispatch) => ({
}))
class Index extends Component {

  config = {
    navigationStyle: 'custom',
    enablePullDownRefresh: true
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillMount() {
      console.log(this.props)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <ComponentNavigatorBar />
        <View className='main'>
          内容
        </View>
      </View>
    )
  }
}

export default Index
