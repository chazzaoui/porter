import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Button,
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

  console.log(state, 'hallo!!1');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
  image: {
    width: width * 0.9,
    height: width * 0.8,
    borderRadius: 20,
    marginBottom: 10,
  },
});

export default HomeScreen;
