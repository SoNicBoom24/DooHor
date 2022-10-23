import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#FFDA79"}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
          title: 'Doohor',
          headerStyle: {
            // backgroundColor: "#FFDA79",
            backgroundColor: "#ffffff",
            height: "50px",
            // width:'750px',
            borderRadius: 20,
            


            borderBottomWidth: 0,
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            // backgroundColor: "#ffffff",
            // height: "50px",
            // width:'750px',
            // borderRadius: 20,
            // paddingLeft: "5%",
          },
          headerShown: true,
          // headerTransparent: true
          // tabBarIcon: () => (
          //   <Icon name="home" size={30} color="#900" />
          // ),
        }} >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color={"#000000"} size={26} />
          ),
        }}>
        </Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: { 
    backgroundColor: "#000000",
    flex: 1,
    width: 'calc(100%-10px)',
    height: '200px'
   },
});
