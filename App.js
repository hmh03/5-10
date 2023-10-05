
import { NavigationContainer } from '@react-navigation/native';
import { Header, createStackNavigator } from '@react-navigation/stack';
import home from './js/home';
import map from './js/map';


const Stack = createStackNavigator();

const App= () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen
        name="home"
        component={home}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="map"
        component={map}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
