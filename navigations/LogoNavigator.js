import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {LogoPage} from '../screens';
import {COLORS, ROUTES} from '../constants';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const LogoNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.LOGO}>
        <Stack.Screen
        name={ROUTES.LOGO}
        component={LogoPage}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigator}
        options={{headerShown: false}}
        />
    </Stack.Navigator>

  )
}

export default LogoNavigator

const styles = StyleSheet.create({})