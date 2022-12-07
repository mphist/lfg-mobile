import { FlatList, StyleSheet, Text, View } from 'react-native'

type TopicItems = {
  data: { id: string; title: string }[]
}

export default function TopicItemsList({ data }: TopicItems) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
})
