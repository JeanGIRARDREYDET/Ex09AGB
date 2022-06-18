import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IncomesScreen from '../Screen/Forms/Incomes'
import ExpensesScreen from '../Screen/Forms/Expenses'
import StatisricsScreen from '../Screen/Statisrics'
import HomeScreen from '../Screen/Accueil'
import BankAccountScreen from '../Screen/BankAccount'

const Stack = createNativeStackNavigator();

const  StackNav= () => {
  return (
  <Stack.Navigator initialRouteName="HomeBankAccount">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Expenses" component={ExpensesScreen} />
    <Stack.Screen name="Statisrics" component={StatisricsScreen} />
  
    <Stack.Screen name="BankAccount" component={BankAccountScreen} />

  </Stack.Navigator>
  
  );
}
export default StackNav 