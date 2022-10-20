import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Styles from '../../Styles'
import ProgressBar from '../../components/ProgressBar'

const ActiveHunt = ({navigation, hunt}) => {

  const [clues, setClues] = React.useState({});




  return (
    <View style={Styles.StandardStyles.page}>
      <ProgressBar value={35} style={styles.progress} />
      <View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  progress: {
    width: '80%'
  }
})

export default ActiveHunt