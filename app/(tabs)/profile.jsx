import React, { useState } from "react";  
import { View, Modal, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'; 

const Profile = () => { 
  const [modalVisible, setModalVisible] = useState(false);

  return (  
    <ScrollView vertical showsVerticalScrollIndicator={false}>
    <View style={styles.container}>  
      {/* Profile Picture and Name */}  
      <View style={styles.profileSection}>  
        <Image source={require('../../assets/images/ghostdp.jpg')} style={styles.profilePic} />  
        <Text style={styles.name}>Kate Montilla</Text>  
        <Text style={styles.email}>katemontilla@gmail.com</Text>  
        <TouchableOpacity style={styles.editProfileButton}>  
          <Text style={styles.editProfileText}>Edit Profile</Text>  
        </TouchableOpacity>  
      </View>  

      {/* BS Wallet Section*/}
      <TouchableOpacity>
      <View style={styles.walletSection}>  
        <Image source={require('../../assets/icons/wallet.png')} style={styles.walletIcon} />  
        <Text style={styles.walletText}>BS Wallet</Text>  
        <View style={styles.priceContainer}>
           <Text style={styles.price}>500 PHP</Text>  
        </View>  
        <Image source={require('../../assets/icons/chevron.png')} style={styles.arrowIcon} />  
      </View>
      </TouchableOpacity>

      {/* Other Sections */}  
      <View style={styles.otherSections}>  
        
        <TouchableOpacity>
        <View style={styles.section}>  
          <Image source={require('../../assets/icons/favorite.png')} style={styles.icon}/>
          <Text style={styles.sectionText}>Wishlist</Text>  
        </View>  
        </TouchableOpacity>
 
        <TouchableOpacity>
        <View style={styles.section}>  
          <Image source={require('../../assets/icons/order.png')} style={styles.icon} />  
          <Text style={styles.sectionText}>Orders</Text>  
        </View>  
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.section}>  
          <Image source={require('../../assets/icons/address.png')} style={styles.icon} />  
          <Text style={styles.sectionText}>Address</Text>  
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.section}>  
          <Image source={require('../../assets/icons/feedback.png')} style={styles.icon} />  
          <Text style={styles.sectionText}>Feedback</Text>  
        </View>  
        </TouchableOpacity>
 
        <TouchableOpacity>
        <View style={styles.section} >  
          <Image source={require('../../assets/icons/support.png')} style={styles.icon} />  
          <Text style={styles.sectionText}>Support Center</Text>  
        </View>  
        </TouchableOpacity>
      </View>  

      {/* Privacy Policy and Log Out */}  
      <View style={styles.footer}>  
      <TouchableOpacity>
        <Text style={styles.footerText}>Privacy Policy</Text> 
      </TouchableOpacity> 
      <TouchableOpacity>
        <Text style={styles.footerText}>Log Out</Text> 
      </TouchableOpacity> 
      </View>  
    </View>  
    </ScrollView>
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    padding: 20,  
    backgroundColor: '#F5F5F5',  
  },  
  profileSection: {  
    alignItems: 'center',  
    marginBottom: 20,  
  },  
  profilePic: {  
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#D07474',  // Border for the profile pic 
  },  
  name: {  
    fontSize: 20,  
    fontWeight: 'bold',  
    marginTop: 10,  
  },  
  email: {  
    fontSize: 14,  
    color: '#888',  
  },  
  editProfileButton: {  
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#D07474',
    borderRadius: 8,  
  },  
  editProfileText: {  
    color: '#fff',
    fontSize: 15,  
  },  
  walletSection: {  
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  // Align items across the row
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 18,
    elevation: 3,  // Slight shadow for the wallet section 
  },  
  walletText: {  
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D07474',
    flex: 1,  // Pushes the price to the right
  },  
  walletIcon: {  
    width: 24,
    height: 24,
    marginRight: 10,  // Space between icon and text
  },  
  priceContainer: {  
    backgroundColor: '#CFF5D2',  // Light green background
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },  
  price: {  
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  arrowIcon: {  
    width: 20,  
    height: 20,
    marginLeft: 10,  // Space between price and arrow 
  },  
  otherSections: {  
    marginBottom: 30,  
  },  
  section: {  
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,  // Slight shadow for each section  
  },  
  icon: {
    width: 24,  // Adjust this value
    height: 24,  // Adjust this value
    resizeMode: 'contain',
  },
  sectionText: {  
    marginLeft: 10,  
    fontSize: 16, 
    color: '#D07474', 
  },  
  footer: {  
    marginTop: 30,
    alignItems: 'center',  
  },  
  footerText: {  
    fontSize: 16,  
    color: '#6200EE',  
    marginBottom: 10, 
    color: '#D07474', 
  },  
  item:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  modalView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  modalImage:{ 
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#D07474',
    padding: 10,
    borderRadius: 5,
  },
  closeText: {
    color: '#fff',
    fontSize: 16,
  },
});  

export default Profile;