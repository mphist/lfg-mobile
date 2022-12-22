import { StyleSheet, Text, View } from 'react-native'

type TopicItembubbleContainerProps = {
  items: { id: string; name: string }[]
}

type TopicItemBubbleProps = {
  name: string
}

export default function TopicItemBubbleContainer({
  items,
}: TopicItembubbleContainerProps) {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <TopicItemBubble name={item.name} key={item.id} />
      ))}
    </View>
  )
}

function TopicItemBubble({ name }: TopicItemBubbleProps) {
  return <Text style={styles.bubble}>{name}</Text>
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 380,
    marginHorizontal: 'auto',
  },
  bubble: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 6,
    padding: 5,
    margin: 5,
    display: 'flex',
    alignItems: 'center',
  },
})
