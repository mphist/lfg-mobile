import { useState } from 'react'
import {
  FlatList,
  Image,
  LayoutAnimation,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Button } from 'react-native-paper'

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

function TopicItem({ item }: { item: Item }) {
  const [expanded, setExpanded] = useState(false)

  const handlePress = (length: number) => {
    LayoutAnimation.configureNext({
      duration: 1.5 * length,
      create: { type: 'linear', property: 'opacity' },
      update: { type: 'linear', property: 'opacity' },
      // delete: { type: 'linear', property: 'opacity' },
    })
    setExpanded((prev) => !prev)
  }

  const handleJoin = () => {}

  return (
    <Pressable
      style={({ pressed }) => styles.pressable}
      onPress={() => handlePress(item.description.length)}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
        {expanded && (
          <Button
            compact
            onPress={handleJoin}
            style={{
              marginLeft: 20,
              backgroundColor: '#c2eaf2',
              borderRadius: 10,
              opacity: 0.7,
            }}
            labelStyle={{
              fontSize: 10,
              fontWeight: 'bold',
              color: 'black',
            }}
            uppercase
          >
            Join
          </Button>
        )}
      </View>
      <Text style={styles.text}>
        Host: <Text style={styles.host}>{item.host.name}</Text>
      </Text>
      <Text style={styles.text}>
        Date: <Text>{getDaysPassedFrom(item.dateCreated)}</Text>
      </Text>
      <Text style={{ ...styles.text, marginTop: 10 }}>
        {/* Members:{' '} */}
        {item.members.map((member) => (
          // <Text key={member.id}>{member.name}</Text>
          <View key={member.id} style={{ paddingRight: 3 }}>
            <Image
              source={member.photoUrl}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
            />
          </View>
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
    marginTop: '5%',
    height: '86%',
  },
  pressable: {
    padding: 7,
    backgroundColor: 'rgba(255,255,255, 0.7)',
    borderRadius: 15,
    marginVertical: 6,
  },
  title: {
    fontWeight: '500',
    width: '80%',
    marginBottom: 23,
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
    width: '95%',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
})
