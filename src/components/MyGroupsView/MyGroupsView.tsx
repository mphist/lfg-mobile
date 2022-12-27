import { ImageBackground, StyleSheet, View } from 'react-native'
import { BACKGROUND_IMAGE } from '../../constants'

export default function MyGroupsView() {
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
