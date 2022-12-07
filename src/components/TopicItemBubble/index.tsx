import { StyleSheet, Text, View } from 'react-native'

type Props = {
  name: string
}
export default function TopicItemBubble({ name }: Props) {
  return <Text style={styles.bubble}>{name}</Text>
}

const styles = StyleSheet.create({
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
