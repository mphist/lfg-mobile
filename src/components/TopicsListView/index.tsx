import { StyleSheet, View } from 'react-native'
import TopicItemBubble from '../TopicItemBubble'

export default function TopicsListView() {
  const items = [
    { id: 1, name: 'cats' },
    { id: 2, name: 'cars' },
    { id: 3, name: 'chocolate' },
  ]
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <TopicItemBubble name={item.name} key={item.id} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: '5px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
