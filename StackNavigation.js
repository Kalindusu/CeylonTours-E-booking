import { StyleSheet, Text, View } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./Screens/ProfileScreen";
import HomeScreen from "./Screens/HomeScreen";
import SavedScreen from "./Screens/SavedScreen";
import BookingScreen from "./Screens/BookingScreen";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import searchScreen from "./Screens/SearchScreen";
import PlacesScreen from "./Screens/PlacesScreen";
import MapScreen from "./Screens/MapScreen";
import PropertyInfoScreen from "./Screens/PropertyInfoScreen";
import RoomsScreen from "./Screens/RoomsScreen";
import UserScreen from "./Screens/UserScreen";
import ConfirmationScreen from "./Screens/ConfirmationScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";


const Stack = createStackNavigator();

const StackNavigation = () => {
  const Tab = createBottomTabNavigator();

  function BottomTabs() {

    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#003580" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Saved",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color="#003580" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Bookings",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="notifications" size={24} color="#003580" />
              ) : (
                <Ionicons name="notifications-outline" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Profile",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#003580" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="Search" component={searchScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Places" component={PlacesScreen}   />
        <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }}   />
        <Stack.Screen name="Info" component={PropertyInfoScreen}   />
        <Stack.Screen name="Rooms" component={RoomsScreen}   />
        <Stack.Screen name="User" component={UserScreen}   />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen}   />
        



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
