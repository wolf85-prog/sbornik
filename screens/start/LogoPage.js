import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';
import {COLORS, ROUTES} from '../../constants';
import Logo from '../../assets/icons/LOGO.svg';
import {useNavigation} from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import "../../global.css"; // Import your global CSS file
import { images } from "../../constants";

const LogoPage = () => {
  return (
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
            />
          </View>
        </ScrollView>

        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
  )
}

export default LogoPage

const styles = StyleSheet.create({})