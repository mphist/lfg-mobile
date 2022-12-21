import React from 'react'
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
    margin: '5px',
    marginTop: '60px',
  },
  searchBar: {
    width: '250px',
    borderWidth: 1,
    paddingLeft: '5px',
    height: '40px',
    borderColor: 'gray',
    borderRadius: 2,
    outlineStyle: 'none',
  },
})
