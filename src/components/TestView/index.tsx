import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'
import type { StackParamList } from '../../../App'

export default function TestView({
  navigation,
}: NativeStackScreenProps<StackParamList>) {
  return (
    <View>
      <Text>TestView</Text>
    </View>
  )
}
