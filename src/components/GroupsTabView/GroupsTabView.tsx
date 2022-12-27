import { ImageBackground, StyleSheet, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { StackParamList } from '../../../App'
import { BACKGROUND_IMAGE } from '../../constants'
import GroupsSearchBar from '../GroupsSearchBar/GroupsSearchBar'
import GroupsListView from '../GroupsListView/GroupsListView'

export default function GroupsTabView({
  navigation,
}: NativeStackScreenProps<StackParamList, 'Groups'>) {
  return (
    <View style={styles.container}>
      <ImageBackground source={BACKGROUND_IMAGE} style={styles.background}>
        <GroupsSearchBar />
        <GroupsListView />
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
