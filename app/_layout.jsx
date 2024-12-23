import React from 'react'
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomDrawerContent from './../components/navigation/CustomDrawerContent';
import { Image } from 'react-native'
import "../global.css";

const RootLayout = () => {

  // return (
  //   <Stack
  //     screenOptions={{
  //       headerStyle: {
  //         backgroundColor: '#f4511e',
  //       },
  //       headerTintColor: '#fff',
  //       headerTitleStyle: {
  //         fontWeight: 'bold',
  //       },
  //     }}
  //   >
  //     {/* Define your routes here */}  
  //     <Stack.Screen name='index' options={{ headerShown: false }} />
  //   </Stack>  
  // );

  return (
      <Drawer
        screenOptions={{
            drawerLabelStyle: {
                marginLeft: -20
            },
            // drawerActiveBackgroundColor: 'gray',
            // drawerActiveTintColor: 'white',
            // drawerInactiveTintColor: 'white'
        }}
        drawerContent={CustomDrawerContent}
      >

        <Drawer.Screen
            name="home"
            options={{
                drawerLabel: 'Home',
                title: 'Home',
                drawerIcon: ({size, color})=>(
                    // <Ionicons name='md-home' size={size} color={color} />
                    <Image source={require('../assets/icons/eye.png')} color={color}  style={{ width: 25, height: 25, }} />
                )

            }}
        />
        <Drawer.Screen
            name="settings"
            options={{
                drawerLabel: 'Settings',
                title: 'Settings',
                drawerIcon: ({size, color})=>(
                    <Ionicons name="md-checkmark-circle" size={size} color={color} />
                )

            }}
        />
        
    </Drawer>
  )
 
}

export default RootLayout