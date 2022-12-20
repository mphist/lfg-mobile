import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TopicsTabView from './src/components/TopicsTabView'
import TestView from './src/components/TestView'

export type StackParamList = {
  Topics: undefined
  testView: undefined
}

const Stack = createNativeStackNavigator<StackParamList>()
const Tab = createBottomTabNavigator<StackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTintColor: 'black',
          headerTitleAlign: 'center',
        }}
      >
        <Tab.Screen
          name='Topics'
          component={TopicsTabView}
          // options={{
          //   header: () => <Header name='Topics' />,
          // }}
        />
        <Tab.Screen name='testView' component={TestView} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
