import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

type TopicItems = {
  data: Item[]
}

type Item = {
  id: string
  title: string
}

export default function TopicItemsList({ data }: TopicItems) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <TopicItem item={item} />}
      />
    </View>
  )
}

function TopicItem({ item }: { item: Item }) {
  return (
    <Pressable style={({ pressed }) => styles.pressable}>
      <Text>{item.title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {},
  pressable: {
    borderWidth: 1,
    padding: 5,
    marginVertical: 2,
  },
})
