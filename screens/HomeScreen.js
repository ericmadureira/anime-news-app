import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import API from '../services/api';

const HomeScreen = () => {
  const [recentAnimes, setRecentAnimes] = useState([]);

  const fetchRecentAnimes = useCallback(async () => {
    try {
      const emptyList = Array.isArray(recentAnimes) && !recentAnimes.length;
      if (emptyList){
        const list = await API.getRecentAnimes();
        console.log('XML NO COMPONENT: ', list);
        setRecentAnimes(list);
      }
    } catch (e) {
      console.log(`Error while fetching data: ${e}`);
    };
  }, [recentAnimes, setRecentAnimes]);

  useEffect(() => {
    fetchRecentAnimes();
  }, [fetchRecentAnimes])

  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};

export default HomeScreen;
