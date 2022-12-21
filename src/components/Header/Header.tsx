import { StyleSheet, Text, View } from 'react-native'

type Props = {
  name: string
}

export default function Header({ name }: Props) {
  return (
    <View>
      <Text style={styles.header}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    fontSize: 20,
  },
})
