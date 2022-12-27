import { useState } from 'react'
import {
  FlatList,
  Image,
  ImageSourcePropType,
  LayoutAnimation,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Button } from 'react-native-paper'

export type GroupItems = {
  data: Item[]
}

export type Item = {
  id: string
  title: string
  host: User
  members: User[]
  dateCreated: Date
  description: string
  joined: boolean
}

type User = {
  id: string
  name: string
  photoUrl: string
}

type ActionButtonProps = {
  name?: string
  handleJoin?: () => void
  handleLeave?: () => void
}

export default function GroupItemsList({ data }: GroupItems) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <GroupItem item={item} />}
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

export function GroupItem({
  item,
  isMyGroupsTab,
}: {
  item: Item
  isMyGroupsTab?: boolean
}) {
  const [expanded, setExpanded] = useState(false)
  const [visible, setVisible] = useState(false)

  function updateVisibility(): (() => void) | undefined {
    return () => setVisible((prev) => !prev)
  }

  const handlePress = (length: number) => {
    LayoutAnimation.configureNext(
      {
        duration: 200,
        create: { type: 'linear', property: 'opacity' },
        update: { type: 'linear', property: 'opacity' },
        // delete: { type: 'linear', property: 'opacity' },
      },
      updateVisibility()
    )
    setExpanded((prev) => !prev)
  }

  const handleJoin = () => {}
  const handleLeave = () => {}

  return (
    <Pressable
      style={({ pressed }) => styles.pressable}
      onPress={() => handlePress(item.description.length)}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
        {expanded && isMyGroupsTab && (
          <ActionButton name='leave' handleLeave={handleLeave} />
        )}
        {expanded &&
          !isMyGroupsTab &&
          (item.joined ? (
            <ActionButton name='joined' />
          ) : (
            <ActionButton name='join' handleJoin={handleJoin} />
          ))}
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
              source={member.photoUrl as ImageSourcePropType}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
            />
          </View>
        ))}
      </Text>
      {expanded && (
        <Text
          style={
            visible ? { ...styles.description, opacity: 1 } : styles.description
          }
        >
          {item.description}
        </Text>
      )}
    </Pressable>
  )
}

function ActionButton({ handleJoin, handleLeave, name }: ActionButtonProps) {
  const getBackgroundColor = () => {
    if (name === 'join') return '#c2eaf2'
    if (name === 'leave') return 'tomato'
    return 'lightgray'
  }
  return (
    <Button
      compact
      onPress={handleJoin || handleLeave}
      style={{
        marginLeft: 20,
        backgroundColor: getBackgroundColor(),
        borderRadius: 10,
        opacity: 0.7,
        width: 49,
      }}
      labelStyle={{
        fontSize: name === 'join' ? 10 : 8,
        fontWeight: 'bold',
        color: 'black',
      }}
      uppercase
    >
      {name}
    </Button>
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
    opacity: 0,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
})
