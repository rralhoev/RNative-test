import * as React from 'react';
import {StyleSheet, Text, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Constants from "expo-constants";

const HomeScreen = ({navigation, changeValue, breads, value, favorites}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{'Выберите породу собаки из списка'}</Text>
      {!!breads.length && <DropDownPicker
        items={breads}
        value={value}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa', width: '100%', minWidth: 300}}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa', maxHeight: 200, overflow: 'scroll'}}
        onChangeItem={changeValue}
        placeholder="Выберите породу"
      />}
      {!!value &&
        <Text onPress={() => navigation.push('Gallery')} accessibilityLabel='link' style={styles.link}>
          Посмотреть фото {value}
        </Text>
      }
      {favorites.length !== 0 &&
      <Text onPress={() => navigation.push('Favorites')} accessibilityLabel='link' style={styles.link}>
        Посмотреть избранные фото
      </Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
  },
  header: {
    marginBottom: 10
  },
  link: {
    fontSize: 16,
    marginTop: 10,
    color: 'blue'
  }
});

export default HomeScreen;
