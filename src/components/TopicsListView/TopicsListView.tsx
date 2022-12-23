import { StyleSheet, View } from 'react-native'
import TopicItemBubbleContainer from '../TopicItemBubble/TopicItemBubble'
import TopicItemsList, { Item } from '../TopicItemsList/TopicItemsList'

const cat1 = require('../../../assets/cat1.jpg')
const cat2 = require('../../../assets/cat2.jpg')
const cat3 = require('../../../assets/cat3.jpg')
const cat4 = require('../../../assets/cat4.jpg')
const cat5 = require('../../../assets/cat5.jpg')

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
      members: [
        { id: '2', name: 'Algochoco', photoUrl: cat1 },
        { id: '3', name: 'Algoberry', photoUrl: cat2 },
        { id: '4', name: 'Algomelon', photoUrl: cat3 },
      ],
      dateCreated: new Date(2022, 11, 19),
      description:
        'Looking for a group to study data strcutures and algorithms together. Ideal group size is 8 people. Anyone is welcome to join regardless of their level of knowledge.',
    },
    {
      id: 'b',
      title: 'Discussion on chocolates',
      host: {
        id: '8',
        name: 'Chocoman',
        photoUrl: 'photoUrl',
      },
      members: [
        { id: '5', name: 'Chocoparty', photoUrl: cat4 },
        { id: '6', name: 'Chocoberry', photoUrl: cat5 },
      ],
      dateCreated: new Date(2022, 11, 18),
      description:
        'Join if you love chocolates. Share your special recipes on home-made chocolates. ',
    },
  ]

  return (
    <View style={styles.container}>
      {/* <TopicItemBubbleContainer items={items} /> */}
      <TopicItemsList data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
})
