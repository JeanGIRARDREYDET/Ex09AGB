import React from 'react'
import HomeScreen from '../Screen/Accueil'
import StatisticsScreen from '../Screen/Statisrics'
import BankAcountScreen from '../Screen/BankAccount'

import  {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'



export type RootStackParamList = {
  Income: undefined;
  Expenses: undefined;
  Statisrics: undefined;
};

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Statistiques') {
              iconName = focused
                ? 'stats-chart-outline'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Revenus') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            // You can return any component that you like here!
            return  <Icon name="information-circle-outline" />//<ion-icon name={iconName} size={size} color={color}></ion-icon>;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Acount" component={BankAcountScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Navigation 