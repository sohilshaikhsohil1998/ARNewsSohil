import React from 'react';
import {
  Image
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import splashScreen from './screens/splashScreen'
import landingPage from './screens/landingPage'
import detailScreen from './screens/detailScreen'

import Icon from 'react-native-vector-icons/Entypo';
import Notify from 'react-native-vector-icons/Ionicons';

import {createStore} from 'redux';
import {Provider} from 'react-redux';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const initialState={
  countA:0,
  countV:0,
  countR:0,

};



function reducer(state = initialState, action){
  switch(action.type){
    case "INCREMENTA":
      return {
        countA: state.countA + 1,
      }
      case "INCREMENTV":
      return {
        countV: state.countV + 1,
      }
      case "INCREMENTR":
      return {
        countR: state.countR+ 1,
      }
      default:
        return state;

  }
}

const store = createStore(reducer);




function MyDrawer({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="landingPage">
      <Drawer.Screen name="landingPage" component={landingPageStack} 
       options={{drawerLabel: 'Landing Page'}}
      />
    </Drawer.Navigator>
  );
}

function App({ navigation }) {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splashScreen" component={splashScreen} options={{headerShown: false}} />
        <Stack.Screen name="MyDrawer" component={MyDrawer}  options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


function landingPageStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="landingPage">
          <Stack.Screen name="landingPage" component={landingPage}
          options={{
            title: 'Landing Page',
            headerStyle: {
              backgroundColor: '#7a6fbe',
            },
            headerTintColor: 'white', 
            headerLeft: () => <Icon style={{marginLeft:10}}
                name="menu"
                size={30}
                color="white"
                onPress={() => navigation.openDrawer()}
              />,

              
              headerRight: () => <Notify style={{marginRight:10}}
              name="notifications"
              size={30}
              color="white"
             
            />,

          }} 
          />
          <Stack.Screen name="detailScreen" component={detailScreen}
           options={{
            title: 'Detail Screen',
            headerStyle: {
              backgroundColor: '#7a6fbe', 
            },
            headerTintColor: 'white', 
          }} 
          />
       
      </Stack.Navigator>
  );
}

export default App;