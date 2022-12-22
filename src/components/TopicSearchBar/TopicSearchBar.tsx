import { Button, StyleSheet, TextInput, View } from 'react-native'
import { useState } from 'react'
import { Searchbar, IconButton, Tooltip } from 'react-native-paper'

export default function TopicSearchBar() {
  const [searchValue, sestSearchValue] = useState('')
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder='Search topics'
        onChangeText={(value) => sestSearchValue(value)}
        value={searchValue}
        style={styles.searchBar}
        placeholderTextColor='gray'
        iconColor='black'
        inputStyle={{ color: 'black', fontSize: 14 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'row',
    margin: 5,
    marginTop: 60,
  },
  searchBar: {
    height: 40,
    width: 360,
    backgroundColor: 'white',
  },
})
