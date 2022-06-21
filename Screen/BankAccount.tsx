import * as React from 'react'
import { Text, View, StyleSheet ,FlatList} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Navigation from '../Navigation/Navigation'
import axios from 'axios'
import AccountLigneJsonData from '..//data/E09_data.json'; // This import style requires "esModuleInterop", see "side notes"

import { ScrollView } from 'react-navigation'
//console.log(AccountLigneJson);
//const Tab = createBottomTabNavigator();
import Realm from "realm";

const TaskSchema = {
  name: "Task",
  properties: {
    _id: "int",
    name: "string",
    status: "string?",
  },
  primaryKey: "_id",
};
// open a local realm with the 'Cat' schema




class BookSchema extends Realm.Object {}
BookSchema.schema = {
    name: 'Book',
    properties: {
        title: 'string',
        pages:  'int',
        edition: 'int?'
    }
};
class AccountRow extends Realm.Object {}

AccountRow.schema = {
  name: 'AccountRow',
  properties: {
    id: 'objectId',
    type: 'string',
    date: 'string',
    amount: 'string',
    category: 'string',
    comments: 'string',
    userid :'string',
  },
};

let realm  = new Realm({schema: [BookSchema], schemaVersion: 1});
//let realmA = new Realm({schema: [BookSchema], schemaVersion: 1});







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


realm.write(() => {
  const book = realm.create('Book', {
    title: 'Barry Butter' ,
    pages:  400
  });
});



let getAllBooks = () => {
  return realm.objects('Book');
}


const Home = () => {
  const array = [
    {
      id: '1',
      user: 'example title 1',
      amount: 'example subtitle 1',
    },
    {
      id: '2',
      user: 'example title 2',
      amount: 'example subtitle 2',
    },
    {
      id: '3',
      user: 'example title 3',
      amount: 'example subtitle 3',
    },
  ];
  
 // const array = ReadJson(AccountLigneJsonData, "");





// Add a couple of Tasks in a single, atomic transaction






  const list = () => {
    return array.map((element) => {
      return (
       <View>
        <View key={element.id} style={{margin: 10}}>
          <Text>{element.user}</Text>
          <Text>{element.amount}</Text>
        </View>
        <FlatList
    data={getAllBooks()}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({item, index}) => {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{item.title}</Text>
                <Text>{item.pages}</Text>
                <Text>{item.edition === null ? 'null' : item.edition}</Text>
            </View>
        )
    }} />

        </View>
      );
    });
  };

  return <View>{list()}</View>;
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

})
export default Home;

