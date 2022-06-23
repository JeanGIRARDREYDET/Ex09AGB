import * as React from 'react'
import { Text, View, StyleSheet, FlatList,Pressable } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Navigation from '../Navigation/Navigation'
import axios from 'axios'
import AccountLigneJsonData from '../data/E09_data.json'; // This import style requires "esModuleInterop", see "side notes"

import { ScrollView } from 'react-navigation'
//console.log(AccountLigneJson);
//const Tab = createBottomTabNavigator();

import { Realm, createRealmContext } from '@realm/react'

const TaskSchema = {
  name: "Task",
  properties: {
    _id: "objectId",
    name: "string",
    status: "string?",
  },
  primaryKey: "_id",
};
// open a local realm with the 'Cat' schema


class AccountRow extends Realm.Object { }

AccountRow.schema = {
  name: 'AccountRow',
  properties: {
    id: 'string',
    type: 'string',
    date: 'string',
    amount: 'string',
    category: 'string',
    comments: 'string',
    userid: 'string',
  }
};








/*
function ReadJson(AccountLigneJsonData: obj, sufix: string) {
 
 let accountRows: accountRow[] = [];
 let curentAccountLine = new accountRow();
 AccountLigneJsonData.forEach(obj => {
   Object.entries(obj).forEach(([key, value]) => {
     if ((typeof value) === "object") {
       
       const tmp = ReadJson(value, sufix);
       console.log(key);
       
       console.log(tmp);
       accountRows.push(curentAccountLine);
     } else {
       let svalue = "" + String(value);
       if ((typeof value) === "string") {
         if (key === '_id') {
           curentAccountLine.userid;
         } else if (key === 'user') {
           curentAccountLine.user = svalue;
         } else if (key === 'date') {
           curentAccountLine.date = svalue;
         } else if (key === 'amount') {
           curentAccountLine.amount = svalue;
         } else if (key === 'category') {
           curentAccountLine.category = svalue;
         } else if (key === 'comments') {
           curentAccountLine.comments = svalue;
         } else if (key === '_id_income') {
           curentAccountLine.type = "income";
           curentAccountLine.id = "i"+svalue;
         } else if (key === '_id_expense') {
           curentAccountLine.id = svalue;
           curentAccountLine.type = "expense";
         }
       }
     }
   });



 });
 return accountRows;
}
*/



// crée une ligne de compte


/*

 */


function Home() {
  console.log(Realm.defaultPath)
  let realm = new Realm({ schema: [AccountRow], schemaVersion: 5});

  realm.write(() => {
    const accountRow = realm.create('AccountRow', {
      id: '1',
      type: 'In',
      date: '12/12/2022',
      amount: '15,33',
      category: 'Pension Amimentaire',
      comments: 'string',
      userid :'Jean',
    
    });
  });


  let getAllAccountRows = () => {
    return realm.objects('AccountRow');
  }

    return <View>

    <FlatList
      data={getAllAccountRows()}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => {
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            
            <Pressable
              onPress={() => {
                realm.write(() => {
                  realm.delete(item)
                })
              }} ><Text>{"🗑️"}</Text></Pressable>
            <Text>-{item.amount === null ? 'null' : item.edition}-</Text>
            <Text>+{item.type}</Text>
            <Text>{item.category}</Text>
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

  export default Home;

