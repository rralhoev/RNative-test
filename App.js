import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {getAllBreeds} from './api/index';
import {
  HomeScreen,
  Gallery,
  Favorites
} from "./src/pages";

function App() {
  const [value, setValue] = React.useState('');
  const [breeds, setBreeds] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const changeValue = (itemValue) => setValue(itemValue.value);

  const addFavorites = (image) => {
    if (!favorites.includes(image)) {
      setFavorites(prevState => [...prevState, image]);
    }
  }

  const removeFavorites = (image) => {
    const newFavorites = favorites.filter(item => item !== image);
    setFavorites(newFavorites);
  }

  React.useEffect(() => {
    getAllBreeds().then(data => setBreeds(data));
  }, []);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} breads={breeds} value={value} favorites={favorites} changeValue={changeValue} />}
        </Stack.Screen>
        <Stack.Screen name="Gallery">
          {props => <Gallery {...props} breed={value} setFavorites={addFavorites} />}
        </Stack.Screen>
        <Stack.Screen name="Favorites">
          {props => <Favorites {...props} favorites={favorites} remove={removeFavorites} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
