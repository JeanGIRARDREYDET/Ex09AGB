import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Text, View ,StyleSheet,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from '../Navigation/Navigation';
import IncomesScreen from './Forms/Incomes'
import ExpensesScreen from './Forms/Expenses'
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function SreenHome({ navigation }) {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen banck</Text> 
    <Icon name="home"/>
    <Button
        title="Incomes"
        onPress={() => navigation.navigate('Incomes')}
      />
   <Button
        title="Expenses"
        onPress={() => navigation.navigate('Incomes')}
      />
      
    </View>
  );
}


function Screen() {
  
  return (
   
    <Stack.Navigator>
      <Tab.Screen name="Home" component={SreenHome} />
      <Tab.Screen name="Incomes" component={IncomesScreen} />
      <Tab.Screen name="Expenses" component={ExpensesScreen} />
    </Stack.Navigator>

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
