import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { themes, ThemeStyles } from '../Styles'

const ThemeButton = ({theme, setTheme}) => {

    let bgColor = themes[theme].btnBgColor;
    let textColor = themes[theme].btnTextColor;
    let borderColor = themes[theme].btnBorderColor;

    const handlePress = () => {
        setTheme(ThemeStyles(themes[theme]));
    }


  return (
   <TouchableOpacity style={{...styles.btn, backgroundColor: bgColor, borderColor: borderColor}} onPress={handlePress}>
    <Text style={{...styles.text, color: textColor}}>{theme}</Text>
   </TouchableOpacity>
  )
}

export default ThemeButton

const styles = StyleSheet.create({
    btn: {
        width: 64,
        height: 64,
        borderRadius: 5,
        borderWidth: 2,
        justifyContent: 'center',
        margin: '5%'
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})