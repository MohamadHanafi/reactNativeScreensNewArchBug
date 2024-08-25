import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="ScreenOne" component={ScreenOne} />
        <Drawer.Screen name="ScreenTwo" component={ScreenTwo} />
        <Drawer.Screen name="ScreenThree" component={ScreenThree} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
