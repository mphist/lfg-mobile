import { FlatList, StyleSheet, View } from 'react-native'
import { GroupItem, GroupItems } from '../GroupItemsList/GroupItemsList'

export default function MyGroupItemsList({ data }: GroupItems) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <GroupItem item={item} isMyGroupsTab={true} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    alignSelf: 'center',
    marginTop: '5%',
    height: '86%',
  },
})
