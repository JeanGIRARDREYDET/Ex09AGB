import  React, { useState }  from 'react'
import  Realm, { BSON } from 'realm'


type RowType = {
    id: string,
    type: string,
    date: Date,
    amount :number ,
    category : string,
    comment :string ,
    beneficiaire : string,
  }

  const RowSchema ={
    name: 'AccountRow',
    primaryKey :'id',
      properties: {
        id:'string',
        type: 'string',
        date: 'date',
        amount: 'double',
        category: 'string',
        comments: 'string',
        beneficiaire: 'string',
      }
    }

    let realm = new Realm({ schema: [RowSchema], schemaVersion: 12});

export function createAccount(){
  const { UUID } = Realm.BSON;
  realm.write(() => {
      const accountRow = realm.create('AccountRow', {
      id : new UUID().toHexString(),
      type: 'Expense',
      date: new Date(),
      amount: 3.4,
      category: 'Reportable',
      comments: 'Commande de materiaux',
      beneficiaire: 'Entreprise BAT ind',
    });
  });
  
}
export type {RowType}
export {RowSchema}
export{realm}
