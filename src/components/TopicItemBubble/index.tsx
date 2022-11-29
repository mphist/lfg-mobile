import { StyleSheet, Text, View } from 'react-native'

type Props = {
  name: string
}
export default function TopicItemBubble({ name }: Props) {
  return <Text style={styles.bubble}>{name}</Text>
}

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: 'rgb(172, 212, 250)',
    color: 'rgb(76, 73, 73)',
    borderRadius: 10,
    width: 'max-content',
    padding: '5px',
    margin: '5px',
  },
})
