import React, { Component ,useSyncExternalStore} from 'react';
import { TextInput, Text, Button, Alert, View, StyleSheet} from 'react-native';
import * as yup from 'yup'
import { Field,  Formik, FormikProps } from 'formik'
import SelectDropdown from 'react-native-select-dropdown'
/*

Un bénéficiaire (nom, prénom)
Un montant
Une date (date de déclaration)
Une catégorie
Un champ de commentaires

*/
const countries = ["food",
    "Invoices",
    "Transportation",
    "Lodging",
    "Health",
    "Entertainment",
   "Holidays",
    "Shopping",
    "Others"]

const Form = () => {
  return (



    
<Formik
        initialValues={{ 
          beneficiary: '',
          amount:'',
          date: '', 
          category:'',
          comments:'',
          password: '' 
        }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          beneficiary: yup
            .string()
            .required('Please, provide the beneficiary!'),
          amount: yup
            .string()
            .required("Please, provide the amount corecly field is Required ")
            .matches(
              /^([0-9]{1,5})([\,|\.][0-9][0-9])?$/,
              "amount value is not valid  (nnnnn ou nnnnn.nn)"
            ),
            date: yup
            .date()
            .required('Please, provide the date!'),
            category: yup
            .string()
            .required('Please, provide the categorie!'),
            comments: yup
            .string()
            .required('Please, provide the comments!'),

            phone: yup
            .string()
            .required("Please, provide the Aoint corecly field is Required")
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              "Phone number is not valid"
            ),
            
          password: yup
            .string()
            .min(4)
            .max(10, 'Password should not excced 10 chars.')
            .required(),
        })}
       >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.formContainer}>
            <TextInput
              value={values.beneficiary}
              style={inputStyle}
              onChangeText={handleChange('beneficiary')}
              onBlur={() => setFieldTouched('beneficiary')}
              placeholder="Beneficiary"
            />
            {touched.beneficiary && errors.beneficiary &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.beneficiary}</Text>
            }   
              
            <TextInput
              value={values.amount}
              style={inputStyle}
              onChangeText={handleChange('amount')}
              onBlur={() => setFieldTouched('amount')}
              placeholder="Amount"
            />
            {touched.amount && errors.amount &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.amount}</Text>
            }





            <TextInput
              value={values.date}
              style={inputStyle}
              onChangeText={handleChange('date')}
              onBlur={() => setFieldTouched('date')}
              placeholder="Date"
            />
            {touched.date && errors.date &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.date}</Text>
            }

            <TextInput
              value={values.category}
              style={inputStyle}
              onChangeText={handleChange('category')}
              placeholder="Category"
              onBlur={() => setFieldTouched('category')}
              
            />
            {touched.category && errors.category &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.category}</Text>
            }



            


<SelectDropdown 
buttonStyle={styles.input}
dropdownStyle={styles.drop}
	data={countries} 
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
  defaultButtonText ="-Categorie-"
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
                     


<TextInput
              value={values.comments}
              style={inputStyle}
              onChangeText={handleChange('comments')}
              placeholder="comments"
              onBlur={() => setFieldTouched('comments')}
             
            />
            {touched.comments && errors.comments &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.comments}</Text>
            }


            <Button
              color="#3740FE"
              title='Submit'
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
);
}
const inputStyle = {
  borderWidth: 1,
  borderColor: '#4e4e4e',
  padding: 12,
  marginBottom: 5,
  width : 250,
  
};

const styles = StyleSheet.create({
  input:{

    borderWidth: 1,
    borderColor: '#4e4e4e',
    padding: 12,
    marginBottom: 5,
    width : 250,    
  },
  container: {
      flex: 1,
      padding: 20,
  },
  error: {
      color: "red",
      marginBottom: 10,
  },
  formContainer: {
      padding: 50 
    }
   ,drop:{
    borderWidth: 1,
    borderColor: '#4e4e4e',
 
    
   }
   ,sdrop:{
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20
   
   }



})
export default Form