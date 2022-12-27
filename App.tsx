import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider as PaperProvider } from 'react-native-paper'
import MaterialCommunityiIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import GroupsTabView from './src/components/GroupsTabView/GroupsTabView'
import MyGroupsView from './src/components/MyGroupsView/MyGroupsView'

export type StackParamList = {
  Groups: undefined
  'My Groups': undefined
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
            tabBarStyle: {
              // backgroundColor: 'black',
            },
          }}
        >
          <Tab.Screen
            name='Groups'
            component={GroupsTabView}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityiIcons name='view-headline' size={20} />
              ),
            }}
          />
          <Tab.Screen
            name='My Groups'
            component={MyGroupsView}
            options={{
              tabBarIcon: () => (
                <MaterialCommunityiIcons name='account-multiple' size={20} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({})
