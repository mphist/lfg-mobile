import { useState } from 'react'
import {
  FlatList,
  LayoutAnimation,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'

type TopicItems = {
  data: Item[]
}

export type Item = {
  id: string
  title: string
  host: User
  members: User[]
  dateCreated: Date
  description: string
}

type User = {
  id: string
  name: string
  photoUrl: string
}

export default function TopicItemsList({ data }: TopicItems) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <TopicItem item={item} />}
      />
    </View>
  )
}

export const getDaysPassedFrom = (dateCreated: Date) => {
  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
  let hoursPassed =
    ((new Date() as any) - (dateCreated as any)) / 1000 / 60 / 60

  let timePassed = hoursPassed
  if (hoursPassed < 24) {
    timePassed = 0
  } else {
    timePassed = Math.floor(timePassed / 24)
  }
  return formatter.format(-1 * timePassed, 'day')
}

//TODO: replace members with their photo
function TopicItem({ item }: { item: Item }) {
  const [expanded, setExpanded] = useState(false)

  const handlePress = () => {
    LayoutAnimation.configureNext({
      duration: 200,
      create: { type: 'linear', property: 'opacity' },
      // update: { type: 'spring', springDamping: 0.4 },
      // delete: { type: 'linear', property: 'opacity' },
    })
    setExpanded((prev) => !prev)
  }

  return (
    <Pressable style={({ pressed }) => styles.pressable} onPress={handlePress}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>
        Host: <Text style={styles.host}>{item.host.name}</Text>
      </Text>
      <Text style={styles.text}>
        Date: <Text>{getDaysPassedFrom(item.dateCreated)}</Text>
      </Text>
      <Text style={styles.text}>
        Members:{' '}
        {item.members.map((member) => (
          <Text key={member.id}>{member.name}</Text>
        ))}
      </Text>
      {expanded && <Text style={styles.description}>{item.description}</Text>}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    alignSelf: 'center',
  },
  pressable: {
    padding: 7,
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: 6,
  },
  title: {
    marginTop: 2,
    marginBottom: 6,
    fontWeight: '500',
  },
  host: {
    fontStyle: 'italic',
  },
  text: {
    marginTop: 1,
    marginBottom: 1,
    fontSize: 13,
  },
  description: {
    marginTop: 10,
    marginBottom: 1,
    fontSize: 13,
  },
})
