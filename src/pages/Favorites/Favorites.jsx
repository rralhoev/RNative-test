import * as React from 'react';
import {ScrollView, View, Image, FlatList, StyleSheet, TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

const Gallery = ({favorites, remove}) => {
  const GalleryCard = ({item}) => {
    return (
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{uri:item}}
        />
        <TouchableWithoutFeedback style={styles.favorite} onPress={() => remove(item)}>
          <Icon name="remove" size={20} color="#000"></Icon>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={GalleryCard}
        keyExtractor={(item, index) => `${index}`}
        contentContainerStyle={styles.list}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  card: {
    width: '100%',
    position: 'relative',
    marginBottom: 10
  },
  image: {
    width: 320,
    height: 200,
  },
  favorite: {
    width: 30,
    height: 30,
    padding: 5,
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Gallery;
