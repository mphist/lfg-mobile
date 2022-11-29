import { Pressable, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { StackParamList } from '../../../App'
import TopicSearchBar from '../TopicSearchBar'
import TopicsListView from '../TopicsListView'

export default function TopicsTabView({
  navigation,
}: NativeStackScreenProps<StackParamList, 'Topics'>) {
  return (
    <View>
      <TopicSearchBar />
      <TopicsListView />
    </View>
  )
}
