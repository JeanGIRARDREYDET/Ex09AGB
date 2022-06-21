export const TodosSchema = {
    name:'Todos',
    properties:{
        _id:'string',
        title:'string',
        completed:'bool'
    },
    primaryKey:'_id'
}