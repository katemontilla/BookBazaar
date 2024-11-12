import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import {images} from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView classNameStyle="bg-white h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center 
        min-h-screen h-[85vh] px-4">
          <Image
            source={images.logo}
            className="h-[40%] pt-10"
            resizeMode='contain'
          />
          <View>
            <Text className="text-5xl text-rose-400 font-hennyp pt-8">Book Bazaar</Text>
          </View> 

            <Text className="text-rose-400 font-psemibold">Where Every Book is a Treasure</Text>

          <CustomButton
          title="GET STARTED"
          handlePress={()=> router.push('/login')}
          containerStyles="w-72 mt-9">
          </CustomButton>

        </View>
      </ScrollView>

      <StatusBar backgroundColor='#D07474' style='light'>
      </StatusBar>

    </SafeAreaView>

  );
}




/**
const styles = StyleSheet.create({
  title: {
    color: '#D07474',
  },
  subtitle: {
    fontSize: 15,
    color: '#D07474',
  },
  button: {
    backgroundColor: '#D07474',
    borderRadius: 12,
    paddingVertical: 11,
    paddingHorizontal: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Android shadow
  },
  buttonText: {
    fontSize: 23,
    color: '#fff',
    textAlign: 'center',
    textDecorationLine: 'none', // Ensures no underline on text
  },
});*/
