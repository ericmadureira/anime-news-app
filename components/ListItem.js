import React from 'react';
import { View, Text } from 'react-native';

const ListItem = ({ anime }) => {
  const { addedAt, title, url } = anime;
  return (
    <View>
      <Text>{title}</Text>
      <Text>{addedAt}</Text>
      <Text>{url}</Text>
    </View>
  );
};

export default ListItem;
