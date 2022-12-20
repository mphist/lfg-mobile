import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

type TopicItems = {
  data: Item[]
}

export type Item = {
  id: string
  title: string
  host: User
  members: User[]
  dateCreated: Date
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
  return (
    <Pressable style={({ pressed }) => styles.pressable}>
      <Text>
        <h4 style={styles.h4}>{item.title}</h4>
      </Text>
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
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '370px',
    marginHorizontal: 'auto',
  },
  pressable: {
    padding: 7,
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: 6,
  },
  h4: {
    marginTop: 2,
    marginBottom: 6,
  },
  host: {
    fontStyle: 'italic',
  },
  text: {
    marginTop: 1,
    marginBottom: 1,
    fontSize: 13,
  },
})
