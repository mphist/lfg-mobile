import { Button, StyleSheet, TextInput, View } from 'react-native'

export default function TopicSearchBar() {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Search topics' style={styles.searchBar} />
      <Button title='GO' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    margin: '5px',
  },
  searchBar: {
    width: '250px',
    borderWidth: 1,
    paddingLeft: '5px',
    height: '40px',
    borderColor: 'gray',
    borderRadius: 2,
  },
})
