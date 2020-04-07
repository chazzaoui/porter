import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');
const HomeScreen = ({navigation}) => {
  const [state, setState] = useState();

  useEffect(() => {
    axios
      .get(
        'https://api.unsplash.com/photos?client_id=KhgCLFekPlb1X_hHAweATCo-70MVejpKh9AX6RNGqS0',
      )
      .then(res => {
        setState(res.data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={state && state}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Image style={styles.image} source={{uri: item.urls.regular}} />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: width * 0.9,
    height: width * 0.8,
    borderRadius: 20,
    marginBottom: 10,
  },
});

export default HomeScreen;
