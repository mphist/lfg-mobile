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
    // margin: '5px',
    marginVertical: '5px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bubble: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 6,
    width: 'max-content',
    padding: '5px',
    margin: '5px',
    display: 'flex',
    alignItems: 'center',
  },
})
