import * as React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


function Screen() {
  
  return (
   
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
  },
  error: {
      color: "red",
      marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#4e4e4e',
    padding: 12,
    margin: 5,
    }
    
})
export default Screen
