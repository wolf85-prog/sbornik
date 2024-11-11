import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect }  from 'react'
import { Drawer } from "expo-router/drawer";
import { useFonts } from 'expo-font'

const DrawerLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../../assets/fonts/Poppins-Black.ttf"),
        "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
        //"Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Thin": require("../../assets/fonts/Poppins-Thin.ttf"),
    });
    

    return (
        <Drawer
            screenOptions={{ headerShown: false}}
        >
        <Drawer.Screen
            name="home"
            options={{
                drawerLabel: "Home",
                title: "Home",
            }}
        />

        <Drawer.Screen
            name="settings"
            options={{
                drawerLabel: "Settings",
                title: "Settings",
            }}
        />
        </Drawer>
    )
}

export default DrawerLayout

const styles = StyleSheet.create({})