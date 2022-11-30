import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Rating = ({rating, size, backgroundColor, style}) => {

  let percent = (1 - rating/5) * 100;


  if (!rating) {
    return (
      <View style={{...styles.container, ...style}}>
        <Text style={{fontSize: size, ...styles.text}}>No&nbsp;Rating</Text>
      </View>)
  }

  return (
    <View style={{...styles.container, ...style}}>
      <Text style={{fontSize: size, ...styles.text}}>{rating}</Text>
      <View>
        <Text style={{fontSize: size, ...styles.stars}}>&#9733;&#9733;&#9733;&#9733;&#9733;</Text>
        <View style={{ width: `${percent}%`, backgroundColor: backgroundColor, ...styles.cover}}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'inherit',
    marginBottom: '5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  stars: {
    color: 'blue'
  },
  cover: {
    position: 'absolute',
    height: '100%',
    right: '0%',
    overflow: 'hidden'
  },
  text: {
    marginRight: '5%'
  }
})

export default Rating