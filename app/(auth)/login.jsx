import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';  
import { Link, Redirect, router } from 'expo-router';
import React from 'react'; 
import LoginButton from '../../components/LoginButton';

const Login = () => {  
  return (  
    <ScrollView vertical showsVerticalScrollIndicator={false}>
    <View style={styles.container}>  
      <Text style={styles.title}>Welcome Back Book Lovers</Text>  
      
      <TextInput  
        style={styles.input}  
        placeholder="Enter username or email"  
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
      
      <LoginButton
          title="Login"
          handlePress={()=> router.push('../home')}
          containerStyles="w-62 mt-2">
      </LoginButton>

      <Text style={styles.dhay}>Don't have an account yet?</Text>
      
        <TouchableOpacity> 
        <Link href="./signup" style={styles.socialButton}>
          <Text style={styles.signUpText} className="font-pbold">Sign Up</Text> 
        </Link> 
        </TouchableOpacity> 

      <View style={styles.separator}/>
      <Text style={styles.orText} className="mt-10">or Sign up via</Text> 
      
      <View style={styles.socialButtons}>  
        <TouchableOpacity>  
        <Image source={require('../../assets/icons/google.png')} style={styles.icon} />  
        </TouchableOpacity> 

        <TouchableOpacity>  
        <Image source={require('../../assets/icons/apple.png')} style={styles.icon} />  
        </TouchableOpacity>  

        <TouchableOpacity>  
        <Image source={require('../../assets/icons/facebook.png')} style={styles.icon} />  
        </TouchableOpacity>   
      </View>   
          
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
    },  
    orText: {  
    textAlign: 'center',  
    marginVertical: 25,  
    color: '#666',    
  },  
  dhay: {  
    textAlign: 'center',  
    marginVertical: 20,  
    color: '#666',  
    marginTop: 30,  
    }, 
    socialButtons: {  
    flexDirection: 'row',  
    justifyContent: 'space-around',  
    },  
    icon: {  
    width: 52,  
    height: 52, 
    },  
    signUpText: {  
    fontWeight: '600', // Optionally add font weight  
    textAlign: 'center', // Center the text in the button  
    },  
    separator: { 
    height: 0.5, // Optionally add font weight  
    width: '90%', 
    marginTop: 40,
    backgroundColor: '#9A9A9A', 
    alignSelf: 'center', // Center the button horizontally 
    },  
    socialButton: {
        padding: 10,  
        borderWidth: 0.4,  
        borderColor: '#ccc',  
        borderRadius: 5,   
        alignSelf: 'center', // Center the button horizontally 
    },


}
)

export default Login