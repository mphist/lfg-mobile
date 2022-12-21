import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider as PaperProvider } from 'react-native-paper'

import TopicsTabView from './src/components/TopicsTabView/TopicsTabView'
import TestView from './src/components/TestView'

export type StackParamList = {
  Topics: undefined
  testView: undefined
}

const Stack = createNativeStackNavigator<StackParamList>()
const Tab = createBottomTabNavigator<StackParamList>()

export default function App() {
  return (
    <PaperProvider>
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
            //   headerTintColor: 'white',
            // }}
          />
          <Tab.Screen name='testView' component={TestView} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({})
