import * as React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IncomesScreen from './Forms/Incomes'
import ExpensesScreen from './Forms/Expenses'

const Tab = createBottomTabNavigator();

function Screen() {
  
  return (
   
    <Tab.Navigator>
      <Tab.Screen name="Incomes" component={IncomesScreen} />
      <Tab.Screen name="Expenses" component={ExpensesScreen} />
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
