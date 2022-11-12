import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const homeImg = require('../assets/homeSymbol.png');

const HomeButton = () => {
  return (
    <TouchableOpacity>
        <Image style={{width: 40, height: 40}} source={homeImg}></Image>
    </TouchableOpacity>
  )
}

export default HomeButton