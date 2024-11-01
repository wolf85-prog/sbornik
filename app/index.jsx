import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import {Image, Text, View, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native';
import "../global.css"; // Import your global CSS file
import { images } from "../constants";

import { useColorScheme } from '@/hooks/useColorScheme';

//import useDatabase from '@/hooks/useDatabase'
//import useCachedResources from './../hooks/useCachedResources';



export default function App() {
  // Prevent the splash screen from auto-hiding before asset loading is complete.
  SplashScreen.preventAutoHideAsync(); //don't let the splash screen hide

  const colorScheme = useColorScheme();
  const [load, setLoad] = useState(true)
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  //const isDBLoadingComplete = useDatabase();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  //-------------------------------

  useEffect(() => {
    setTimeout(()=> {
      setLoad(false)
    }, 3000)
  },[])

  if (!load) return <Redirect href="/home" />;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack> */}
      
      <SafeAreaView className="bg-primary h-full">
        <ScrollView
          contentContainerStyle={{
            height: "100%",
          }}
        >
          <View className="w-full flex justify-center items-center h-full px-4">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
              onClick={() => router.push('/home')}
              //onPress={() => navigation.push('/home')}
            />
          </View>
        </ScrollView>

        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>

    </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     }
//   })

