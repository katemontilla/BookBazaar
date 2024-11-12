import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';  
import React from 'react';  

const Cart = () => {  
  return (  
    <View style={styles.container}>  
      <Image   
        source={require('../../assets/icons/emptycart.png')}   
        style={styles.cartIcon}   
      />  
      <Text style={styles.emptyCartText}>Your cart is empty</Text>  
      <Text style={styles.addItemsText}>Add items to get started</Text>  
      <TouchableOpacity style={styles.button} className="border-1 border-red-300">  
        <Text style={styles.buttonText}>Start Shopping</Text>  
      </TouchableOpacity>  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#F5F5F5',  
  },  
  header: {  
    fontSize: 24,  
    fontWeight: 'bold',  
    marginBottom: 20,  
  },  
  cartIcon: {  
    width: 180,  
    height: 180,  
    marginBottom: 20,  
  },  
  emptyCartText: {  
    fontSize: 18,  
    marginBottom: 10,  
  },  
  addItemsText: {  
    fontSize: 16,  
    marginBottom: 30,  
  },  
  button: {  
    backgroundColor: '#D07474',  
    padding: 12,  
    borderRadius: 15,
    width: 190, 
    alignItems: 'center',
    elevation: 2,  
  },  
  buttonText: {  
    color: '#fff',  
    fontSize: 19, 
  },  
});  

export default Cart;














/* LOGIN
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
  },  
  backgroundColor: '#D07474',  
    padding: 18,  
    borderRadius: 25,  
    alignItems: 'center',  
    elevation: 2,
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
  padding: 10,  
  borderWidth: 0.4,  
  borderColor: '#ccc',  
  borderRadius: 5,   
  alignSelf: 'center', // Center the button horizontally 
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
  
},   
);  

export default Login;
*/




/*  SIGNUP
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';  
import { Link, Redirect, router } from 'expo-router';
import React from 'react';  
import SignupButton from '../../components/SignupButton';

const SignUp = () => {  
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
  },  
  backgroundColor: '#D07474',  
  padding: 18,  
  borderRadius: 25,  
  alignItems: 'center',
  marginVertical: 10,  
  elevation: 2,
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
  
},   
);  

export default SignUp;
*/