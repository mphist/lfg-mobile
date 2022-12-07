import { StyleSheet, View } from 'react-native'
import TopicItemBubbleContainer from '../TopicItemBubble'
import TopicItemsList from '../TopicItemsList'

export default function TopicsListView() {
  const items = [
    { id: '1', name: 'cats' },
    { id: '2', name: 'cars' },
    { id: '3', name: 'chocolate' },
  ]

  const data = [
    { id: 'a', title: 'DS & Algo study group' },
    { id: 'b', title: 'Discussion on chocolates' },
  ]

  return (
    <View style={styles.container}>
      <TopicItemBubbleContainer items={items} />
      <TopicItemsList data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: '5px',
  },
})
