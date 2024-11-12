import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'   
import React from 'react'  

const Category = () => {  
  return (  
    <ScrollView vertical showsVerticalScrollIndicator={false}>
    <View style={styles.container}>  
      <Text style={styles.title}>Categories</Text>  
      <View style={styles.iconContainer}>  
 
        <View style={styles.iconWrapper}>
        <TouchableOpacity> 
          <View style={styles.circle}>  
            <Image source={require('../../assets/icons/fantasy.png')} style={styles.icon} />  
          </View>  
          <Text style={styles.label}>Fantasy</Text>  
          <Text style={styles.bookCount}>300 books</Text>  
          </TouchableOpacity>
        </View> 

        <View style={styles.iconWrapper}>  
        <TouchableOpacity>
          <View style={styles.circle}> 
          <TouchableOpacity> 
            <Image source={require('../../assets/icons/mystery.png')} style={styles.icon} />  
          </TouchableOpacity>
          </View>  
          <Text style={styles.label}>Mystery</Text>  
          <Text style={styles.bookCount}>255 books</Text> 
          </TouchableOpacity> 
        </View> 

        <View style={styles.iconWrapper}>  
        <TouchableOpacity>
          <View style={styles.circle}>  
            <Image source={require('../../assets/icons/thriller.png')} style={styles.icon} />  
          </View>  
          <Text style={styles.label}>Thriller</Text>  
          <Text style={styles.bookCount}>230 books</Text> 
          </TouchableOpacity> 
        </View> 

        <View style={styles.iconWrapper}>  
        <TouchableOpacity>
          <View style={styles.circle}>  
            <Image source={require('../../assets/icons/adventure.png')} style={styles.icon} />  
          </View>  
          <Text style={styles.label}>Adventure</Text>  
          <Text style={styles.bookCount}>185 books</Text> 
          </TouchableOpacity> 
        </View> 

        <View style={styles.iconWrapper}>  
        <TouchableOpacity>
          <View style={styles.circle}>  
            <Image source={require('../../assets/icons/science-fiction.png')} style={styles.icon} />  
          </View>  
          <Text style={styles.label}>Science Fiction</Text>  
          <Text style={styles.bookCount}>120 books</Text>  
          </TouchableOpacity>
        </View> 

        <View style={styles.iconWrapper}>  
        <TouchableOpacity>
          <View style={styles.circle}>  
            <Image source={require('../../assets/icons/romance.png')} style={styles.icon} />  
          </View>  
          <Text style={styles.label}>Romance</Text>  
          <Text style={styles.bookCount}>220 books</Text> 
          </TouchableOpacity> 
        </View> 

        <View style={styles.iconWrapper}>  
        <TouchableOpacity>
          <View style={styles.circle}>  
            <Image source={require('../../assets/icons/historical.png')} style={styles.icon} />  
          </View>  
          <Text style={styles.label}>Historical Fiction</Text>  
          <Text style={styles.bookCount}>90 books</Text>  
          </TouchableOpacity>
        </View> 

        <View style={styles.iconWrapper}>  
        <TouchableOpacity>
          <View style={styles.circle}>  
            <Image source={require('../../assets/icons/horror.png')} style={styles.icon} />  
          </View>  
          <Text style={styles.label}>Horror</Text>  
          <Text style={styles.bookCount}>100 books</Text> 
          </TouchableOpacity> 
        </View>  

        <View style={styles.iconWrapper}>  
        <TouchableOpacity>
          <View style={styles.circle}>  
            <Image source={require('../../assets/icons/young-adult.png')} style={styles.icon} />  
          </View>  
          <Text style={styles.label}>Young Adult</Text>  
          <Text style={styles.bookCount}>180 books</Text>  
          </TouchableOpacity>
        </View>  

        <View style={styles.iconWrapper}>  
        <TouchableOpacity>
          <View style={styles.circle}>  
            <Image source={require('../../assets/icons/literary-fiction.png')} style={styles.icon} />  
          </View>  
          <Text style={styles.label}>Literary Fiction</Text>  
          <Text style={styles.bookCount}>70 books</Text>  
          </TouchableOpacity>
        </View> 

        <View style={styles.iconWrapper}>  
        <TouchableOpacity>
          <View style={styles.circle}>  
            <Image source={require('../../assets/icons/memoir.png')} style={styles.icon} />  
          </View>  
          <Text style={styles.label}>Memoir</Text>  
          <Text style={styles.bookCount}>50 books</Text>  
          </TouchableOpacity>
        </View> 

        <View style={styles.iconWrapper}>  
        <TouchableOpacity>
          <View style={styles.circle}>  
            <Image source={require('../../assets/icons/philosophy.png')} style={styles.icon} />  
          </View>  
          <Text style={styles.label}>Philosophy</Text>  
          <Text style={styles.bookCount}>160 books</Text>  
          </TouchableOpacity>
        </View> 

      </View>  
    </View>  
    </ScrollView>
  )  
}  

const styles = StyleSheet.create({  
  container: {  
    padding: 30,  
    backgroundColor: '#F5F5F5',  
  },  
  title: {  
    fontSize: 24,  
    fontWeight: 'bold',  
    textAlign: 'center',  
    marginBottom: 20,  
  },  
  iconContainer: {  
    flexDirection: 'row',  
    flexWrap: 'wrap',  
    justifyContent: 'space-around',  
  },  
  iconWrapper: {  
    alignItems: 'center',  
    marginVertical: 10,  
    width: '30%', // Adjust width as needed  
  },  
  circle: {  
    width: 80,  
    height: 80,  
    borderRadius: 40,  
    backgroundColor: '#fff',  
    alignItems: 'center',  
    justifyContent: 'center',  
    marginBottom: 5,  
  },  
  icon: {  
    width: 30,  
    height: 30,  
  },  
  label: {  
    fontSize: 16,  
    fontWeight: '600',
    textAlign: 'center', 
    color: '#D07474', 
  },  
  bookCount: {  
    fontSize: 14,  
    color: '#666', 
    textAlign: 'center',  
  },  
})  

export default Category