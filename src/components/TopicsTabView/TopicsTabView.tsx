import { ImageBackground, StyleSheet, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { StackParamList } from '../../../App'
import TopicSearchBar from '../TopicSearchBar/TopicSearchBar'
import TopicsListView from '../TopicsListView/TopicsListView'
import { BACKGROUND_IMAGE } from '../../constants'

export default function TopicsTabView({
  navigation,
}: NativeStackScreenProps<StackParamList, 'Topics'>) {
  return (
    <View style={styles.container}>
      <ImageBackground source={BACKGROUND_IMAGE} style={styles.background}>
        <TopicSearchBar />
        <TopicsListView />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  background: {
    height: '100%',
  },
})
