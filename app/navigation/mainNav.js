import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Follow from "../screens/Follow";
import Search from "../screens/Search";

const NewsTab = createBottomTabNavigator();

const NewsStack = () => {
  return (
    <NewsTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#F2F2F7", // active icon color
        inactiveTintColor: "#8E8E93", // inactive icon color
        style: {
          backgroundColor: "#1C1C1E", // TabBar background
        },
      }}
    >
      <NewsTab.Screen
        name="Home"
        component={Home}
        options={{
          title: "News",
          tabBarIcon: () => (
            <Ionicons name="bulb-outline" size={24} color="#F2F2F7" />
          ),
        }}
      />
      <NewsTab.Screen
        name="Follow"
        component={Follow}
        options={{
          title: "Discover",
        }}
      />
      <NewsTab.Screen
        name="Search"
        component={Search}
        options={{
          title: "Search",
        }}
      />
    </NewsTab.Navigator>
  );
};

export default NewsStack;
