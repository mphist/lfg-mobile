import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { BACKGROUND_IMAGE } from '../../constants'

export default function GroupsView() {
  return (
    <View>
      <ImageBackground
        source={BACKGROUND_IMAGE}
        style={styles.background}
      ></ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
  },
})
