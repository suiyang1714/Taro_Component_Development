import Taro, {Component} from "@tarojs/taro";

import './index.scss'
import {View} from "@tarojs/components";


import back from '../../images/btn_back@2x.png'
import home from '../../images/btn_homepage@2x.png'

class ComponentNavigatorBar extends Component {
  state = {
    navBarHeight: 0,
    statusBarHeight: 0,
    titleBarHeight: 0,
  }
  componentWillMount() {
    const self = this
    Taro.getSystemInfo({
      success (system) {
        console.log(system)
        self.setState({
          statusBarHeight: system.statusBarHeight,
        })
        console.log(system.statusBarHeight)
        let platformReg = /iOS/i
        if (platformReg.test(system.system)) {
          self.setState({
            navBarHeight: Number(system.statusBarHeight) + 32 + 8,
            titleBarHeight: 32 + 8
          })
        } else {
          self.setState({
            navBarHeight: Number(system.statusBarHeight) + 32 + 16,
            titleBarHeight: 32 + 16
          })
        }
      }
    })
  }

  backClick () {
    Taro.navigateBack()
  }

  homeClick () {
    Taro.switchTab({url: '/pages/index/index'})

  }

  render() {
    const {navBarHeight, statusBarHeight, titleBarHeight} = this.state
    const { homePath, backVisible, titleColor, title, navBackgroundColor } = this.props

    return (
      <View className='navigatorBar'>
        <View className='navigatorBar__placeholder' style={{height: navBarHeight + 'px'}} />

        <View className='navigatorBar__main' style={{height: navBarHeight + 'px', backgroundColor: navBackgroundColor}}>

          <View className='navigatorBar__statusBar' style={{height: statusBarHeight + 'px', backgroundColor: 'red'}} />

          <View className='navigatorBar__titleBar' style={{height: titleBarHeight + 'px'}}>
            <View className='capsule'>
              {
                backVisible &&
                <View className='capsule__item back' onClick={this.backClick.bind()}>
                  <Image className='capsule__item--img' src={back} />
                </View>
              }
              {
                (backVisible && homePath) &&
                <View className='line' />
              }
              {
                homePath &&
                <View className='capsule__item home' onClick={this.homeClick.bind()}>
                  <Image className='capsule__item--img' src={home} />
                </View>
              }
            </View>
            <View className='title' style={{color: titleColor}}>{title}</View>
          </View>
        </View>
      </View>
    )
  }
}

ComponentNavigatorBar.defaultProps = {
  // 导航栏背景色
  navBackgroundColor: false,
  // 标题颜色
  titleColor: '#5F6379',
  // 标题文字
  title: '',
  // 是否显示后退按钮
  backVisible: true,
  // home按钮的路径
  homePath: '/pages/index/index'
}

export default ComponentNavigatorBar
