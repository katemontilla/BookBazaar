import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';  
import React from 'react';  

const Home = () => {  
  return (  
    <View style={styles.container}>  
      {/* Header */}  
      <View style={styles.header}> 
      <TouchableOpacity> 
      <Image 
          source={require('../../assets/icons/menu.png')} 
          style={styles.menuIcon} 
        /> 
      </TouchableOpacity>
        <Text className="font-hennyp" style={styles.title}>Book Bazaar</Text>
        <TouchableOpacity> 
        <Image 
          source={require('../../assets/icons/notifbell.png')}  // Add the notification bell icon here
          style={styles.bellIcon} 
        /> 
      </TouchableOpacity>
      </View>  

      <ScrollView vertical showsVerticalScrollIndicator={false}>
      <View style={styles.searchBar}>  
        <Image
        source={require('../../assets/icons/search.png')} style={styles.searchIcon} />  
        <TextInput 
          style={styles.input}  
          placeholder="Search books"  
          placeholderTextColor="#888"  
        />  
      </View> 

      {/* Trending This Week Section */}  
      <View style={styles.trendingSection}>
      <Text style={styles.sectionTitle} className="pt-7">Trending this week</Text> 
      <TouchableOpacity>
      <Text style={styles.showMore} className="pt-6">Show more</Text>
      </TouchableOpacity>
      </View> 

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>  
      <View style={styles.sectionContainer}> 
        <View style={styles.card}>  
          <Image source={require('../../assets/images/myth.png')} style={styles.bookImage} />  
          <Text style={styles.bookTitle}>The Myth of Sisyphus</Text>  
          <Text style={styles.authorName}>Albert Camus</Text>  
          <Text style={styles.price}>500 PHP</Text> 
          <View style={styles.ratingContainer}>
          <View style={styles.rating}>  
            <Image source={require('../../assets/icons/yellowstar.png')} style={styles.starIcon} />  
            <Text>4.2</Text>  
          </View> 
          </View>
        </View> 
        </View>

        <View style={styles.sectionContainer}>  
        <View style={styles.card}>  
          <Image source={require('../../assets/images/murder.jpg')} style={styles.bookImage} />  
          <Text style={styles.bookTitle}>Murder Your Employer</Text>  
          <Text style={styles.authorName}>Rupert Holmes</Text>  
          <Text style={styles.price}>500 PHP</Text> 
          <View style={styles.ratingContainer}>
          <View style={styles.rating}>  
            <Image source={require('../../assets/icons/yellowstar.png')} style={styles.starIcon} />  
            <Text>4.2</Text>  
          </View>  
          </View>
        </View>  
        </View>

        <View style={styles.sectionContainer}> 
        <View style={styles.card}>  
          <Image source={require('../../assets/images/1984.jpg')} style={styles.bookImage} />  
          <Text style={styles.bookTitle}>1984</Text>  
          <Text style={styles.authorName}>George Orwell</Text>  
          <Text style={styles.price}>500 PHP</Text>
          <View style={styles.ratingContainer}> 
          <View style={styles.rating}>  
            <Image source={require('../../assets/icons/yellowstar.png')} style={styles.starIcon} />  
            <Text>4.2</Text>  
          </View> 
          </View>
        </View>  
        </View>
      </ScrollView>  

      {/* Recommended Section */}
      <View style={styles.trendingSection}> 
      <Text style={styles.sectionTitle} className="pt-7">Recommended</Text> 
      <TouchableOpacity> 
      <Text style={styles.showMore} className="pt-6">Show more</Text>
      </TouchableOpacity>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
      <View style={styles.sectionContainer}> 
        <View style={styles.card} >  
          <Image source={require('../../assets/images/hobbit.jpg')} style={styles.bookImage} />  
          <Text style={styles.bookTitle}>The Hobbit</Text>  
          <Text style={styles.authorName}>John Ronald Tolkien</Text>  
          <Text style={styles.price}>500 PHP</Text> 
          <View style={styles.ratingContainer}>
          <View style={styles.rating}>  
            <Image source={require('../../assets/icons/yellowstar.png')} style={styles.starIcon} />  
            <Text>4.2</Text>  
          </View> 
          </View> 
        </View>  
        </View>

        <View style={styles.sectionContainer}> 
        <View style={styles.card}>  
          <Image source={require('../../assets/images/olympian.jpg')} style={styles.bookImage} />  
          <Text style={styles.bookTitle}>The Last Olympian</Text>  
          <Text style={styles.authorName}>Rick Riordan</Text>  
          <Text style={styles.price}>500 PHP</Text> 
          <View style={styles.ratingContainer}>
          <View style={styles.rating}>  
            <Image source={require('../../assets/icons/yellowstar.png')} style={styles.starIcon} />  
            <Text>4.2</Text>  
          </View>  
          </View>
          </View>
        </View>  

        <View style={styles.sectionContainer}> 
        <View style={styles.card}>  
          <Image source={require('../../assets/images/harrypotter.jpg')} style={styles.bookImage} />  
          <Text style={styles.bookTitle}>Harry Potter and the...</Text> 
          
          <Text style={styles.authorName}>J.K. Rowling</Text>  
          <Text style={styles.price}>500 PHP</Text>
          <View style={styles.ratingContainer}>
          <View style={styles.rating}>  
            <Image source={require('../../assets/icons/yellowstar.png')} style={styles.starIcon} />  
            <Text>4.2</Text>  
          </View>  
          </View>
        </View>
        </View> 

        <View style={styles.sectionContainer}> 
        <View style={styles.card}>  
          <Image source={require('../../assets/images/shining.jpg')} style={styles.bookImage} />  
          <Text style={styles.bookTitle}>The Shining</Text> 
          <Text style={styles.authorName}>Stephen King</Text>  
          <Text style={styles.price}>500 PHP</Text>  
          <View style={styles.ratingContainer}>
          <View style={styles.rating}>  
            <Image source={require('../../assets/icons/yellowstar.png')} style={styles.starIcon} />  
            <Text>4.2</Text>  
          </View>
          </View> 
        </View>  
        </View>
      </ScrollView> 

      {/* Author Section */}
      <View style={styles.trendingSection}> 
      <Text style={styles.sectionTitle} className="pt-7">Top Authors</Text> 
      <TouchableOpacity> 
      <Text style={styles.showMore} className="pt-6">Show more</Text>
      </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.authorContainer}>
            <View style={styles.authorCard}>
              <Image
                source={require('../../assets/images/osamu_dazai.jpg')}
                style={styles.authorImage}
              />
              <Text style={styles.authorName}>Osamu Dazai</Text>
            </View>

            <View style={styles.authorCard}>
              <Image
                source={require('../../assets/images/rick_riordan.jpg')}
                style={styles.authorImage}
              />
              <Text style={styles.authorName}>Rick Riordan</Text>
            </View>

            <View style={styles.authorCard}>
              <Image
                source={require('../../assets/images/stephen_king.jpg')}
                style={styles.authorImage}
              />
              <Text style={styles.authorName}>Stephen King</Text>
            </View>

            <View style={styles.authorCard}>
              <Image
                source={require('../../assets/images/edgar_poe.jpg')}
                style={styles.authorImage}
              />
              <Text style={styles.authorName}>Edgar Allan Poe</Text>
            </View>

            </View>
            </ScrollView>

      </ScrollView>   
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    padding: 17,  
    backgroundColor: '#F5F5F5', 
  },  
  header: {  
    flexDirection: 'row',  
    alignItems: 'center',  
    justifyContent: 'space-between',  
    marginBottom: 5,  
  },  
  title: {  
    fontSize: 28,   
    flex: 1,  
    textAlign: 'center', 
    color: '#D07474', 
  },  
  searchBar: {  
    borderWidth:1, 
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',    
    borderRadius:15,  
    paddingHorizontal:10,  
    marginVertical:10, 
    padding: 10, 
  },  
  searchIcon: {  
    width: 20,  
    height: 20,  
    marginRight: 10, 
    marginLeft: 2,
  },
  trendingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },
  sectionTitle: {  
    fontSize: 22,  
    fontWeight: 'bold', 
  },  
  card: {  
    alignItems: 'center', // Horizontally center the items inside the card
    justifyContent: 'center', // Vertically align items inside the card
    marginBottom: 10, // Optional: space between cards 
  }, 
  bookImage: {  
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 10, // Space between image and text  
  },  
  bookTitle: {  
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'center', // Center align text 
  },  
  authorName: {  
    color: 'gray',
    textAlign: 'center', // Center align text  
  },  
  price: {  
    color: '#D07474',
    fontWeight: 'bold',
    textAlign: 'center', // Center align text
    marginVertical: 5,  
  },  
  showMore: {  
    color: '#D07474',  
    marginVertical: 15, 
    marginHorizontal: 2, 
    textAlign: 'right',
  }, 
  rating: {  
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center align the rating row 
  },  
  ratingContainer: {  
    backgroundColor: '#CFF5D2',  // Light green background
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },  
  starIcon: {  
    width: 16,
    height: 16,
    marginRight: 4, 
  },  
  sectionContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center', // Center align the items inside the container
    elevation: 2, 
    marginBottom: 20,
    flexDirection: 'row',
  }, 
  bellIcon: {
    width: 26,
    height: 26,
    marginLeft: 10, // To add some space between title and bell icon
  },
  menuIcon: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
  topAuthorsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  authorContainer: {
    flexDirection: 'row',
    marginTop: 1,
  },
  authorCard: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  authorImage: {
    width: 100,
    height: 100,
    borderRadius: 60, // To make the image circular
    marginBottom: 5,
  },
  authorName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});  

export default Home;