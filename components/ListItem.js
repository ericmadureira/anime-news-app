import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import defaultAnime from '../assets/defaultAnime.png';

const ListItem = ({ anime }) => {
  const { addedAt, title, url } = anime;
  const addedDate = addedAt.split(' ')[0];
  return (
    <View style={styles.itemContainer}>
      <Image source={defaultAnime} style={styles.imagePreview}/>
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDate}>{addedDate}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  imagePreview: {
    height: 'auto',
    width: '30%',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
  },
  itemDate: {
    fontSize: 10,
  },
  itemInfo: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  itemTitle: {
    fontWeight: 'bold',
  },
});
