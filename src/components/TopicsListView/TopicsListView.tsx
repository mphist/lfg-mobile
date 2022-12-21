import { StyleSheet, View } from 'react-native'
import TopicItemBubbleContainer from '../TopicItemBubble/TopicItemBubble'
import TopicItemsList, { Item } from '../TopicItemsList/TopicItemsList'

export default function TopicsListView() {
  const items = [
    { id: '1', name: 'cats' },
    { id: '2', name: 'cars' },
    { id: '3', name: 'chocolate' },
  ]

  const data: Item[] = [
    {
      id: 'a',
      title: 'DS & Algo study group',
      host: {
        id: '1',
        name: 'Algoman',
        photoUrl: 'photoUrl',
      },
      members: [{ id: '2', name: 'Algochoco', photoUrl: 'no-photo' }],
      dateCreated: new Date(2022, 11, 19),
    },
    {
      id: 'b',
      title: 'Discussion on chocolates',
      host: {
        id: '2',
        name: 'Chocoman',
        photoUrl: 'photoUrl',
      },
      members: [{ id: '3', name: 'Chocoparty', photoUrl: 'no-photo' }],
      dateCreated: new Date(2022, 11, 18),
    },
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
