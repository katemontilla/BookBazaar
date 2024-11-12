import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';  
import { Link, Redirect, router } from 'expo-router';
import React from 'react';  
import SignupButton from '../../components/SignupButton';

const Signup = () => {  
  return (  
    <ScrollView vertical showsVerticalScrollIndicator={false}>
    <View style={styles.container}>  
      <Text style={styles.title}>Join Our Community of Book Lovers</Text>  
      
      <TextInput  
        style={styles.input}  
        placeholder="Enter fullname"  
      />  

      <TextInput  
        style={styles.input}  
        placeholder="Enter username"  
      />

      <TextInput  
        style={styles.input}  
        placeholder="Enter phone number"  
      /> 

      <TextInput  
        style={styles.input}  
        placeholder="Enter email"  
        keyboardType="email-address"  
      /> 
      
      <TextInput  
        style={styles.input}  
        placeholder="Enter password"  
        secureTextEntry  
      />  
      
      <TextInput  
        style={styles.input}  
        placeholder="Re-enter password"  
        secureTextEntry  
      />  
      
      <SignupButton
          title="Sign Up"
          handlePress={()=> router.push('../login')}
          containerStyles="w-62 mt-2">
      </SignupButton>

    </View>  
    </ScrollView>

  );  
};  

const styles = StyleSheet.create({  
    container: {  
      flex: 1,  
      justifyContent: 'center',  
      padding: 20,  
      backgroundColor: '#F5F5F5',
        
    },  
    title: {  
      fontSize: 24,  
      fontWeight: 'bold',  
      marginBottom: 20,  
      textAlign: 'center',  
      marginTop: 80, 
    },  
    input: {  
      height: 60,  
      borderColor: '#ccc',  
      borderWidth: 1,  
      borderRadius: 5,  
      marginBottom: 18,  
      paddingHorizontal: 10,  
      elevation: 1,
    },  
    buttonText: {  
        color: '#FFFFFF',  
        fontWeight: 'bold',
        textAlign: 'center',  
      },  
      orText: {  
        textAlign: 'center',  
        marginVertical: 40,  
        color: '#666',    
      },  
      socialButtons: {  
        flexDirection: 'row',  
        justifyContent: 'space-around',  
      },  
      icon: {  
        width: 52,  
        height: 52,  
      },  
      socialButton: {  
        padding: 2, 
        borderColor: '#ccc',  
        borderRadius: 5, 
        flexDirection: 'row',  
        justifyContent: 'space-around', 
      }, 
}
)

export default Signup