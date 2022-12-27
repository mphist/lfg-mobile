import { ImageBackground, StyleSheet, View } from 'react-native'
import { BACKGROUND_IMAGE } from '../../constants'
import MyGroupsListView from '../MyGroupsListView/MyGroupsListView'

export default function MyGroupsView() {
  return (
    <View>
      <ImageBackground source={BACKGROUND_IMAGE} style={styles.background}>
        <MyGroupsListView />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
  },
})
