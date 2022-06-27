import  React, { useState }  from 'react'
import { Text, View, StyleSheet, FlatList,Pressable } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Navigation from '../Navigation/Navigation'
import axios from 'axios'
import AccountLigneJsonData from '../data/E09_data.json' // This import style requires "esModuleInterop", see "side notes"
import {RowType as AccountRowType,RowSchema as AccountRowSchema,realm } from '../Models/BankAccount'
import { ScrollView } from 'react-navigation'
//console.log(AccountLigneJson);
//const Tab = createBottomTabNavigator();


import { createIconSetFromFontello } from 'react-native-vector-icons'

// crée une ligne de compte



function ScreenAccount() {
  const maDate = new Date()
  maDate.toLocaleDateString("fr")

  console.log (typeof realm.objects('AccountRow'));
//  const [accountData, setaccountData()] = useState<Array<any>>(realm.objects('AccountRow'));
const [AccountRow , setAccountRow] = useState(realm.objects('AccountRow')
);
// let  toot: Array<AccountRowType> =AccountRow;
let  toot: Array<AccountRowType> =AccountRow;


    return <View>
    <FlatList
      data={AccountRow}
      renderItem={({ item }) =>  {
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Pressable
              onPress={() => {
                realm.write(() => {
                  realm.delete(item)
                });
                setUsers(realm.objects('AccountRow'));
              
              }} ><Text>{"🗑️"}</Text></Pressable>
            <Text>{item.amount === null ? 'null' : item.amount}-</Text>
            <Text>{item.date.toLocaleDateString("fr")}</Text>
            <Text>{item.type}</Text>
            <Text>{

maDate.toLocaleDateString("fr")}</Text>
            <Text>{item.amount === null ? 'null' : item.edition}</Text>
          </View>
        )
      }} />

  </View>;
  };


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

  }
  )

  export default ScreenAccount;

