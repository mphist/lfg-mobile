import { Button, StyleSheet, TextInput, View, Dimensions } from 'react-native'
import { useState } from 'react'
import { Searchbar, IconButton, Tooltip } from 'react-native-paper'

export default function GroupsSearchBar() {
  const [searchValue, sestSearchValue] = useState('')
  const screenHeight = Dimensions.get('screen').height
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder='Search groups'
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
    marginTop: '30%',
  },
  searchBar: {
    height: 40,
    width: 360,
    backgroundColor: 'white',
  },
})
