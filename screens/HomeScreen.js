import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import API from '../services/api';
import parsers from '../services/parsers';

const HomeScreen = () => {
  const [recentAnimes, setRecentAnimes] = useState([]);

  const fetchRecentAnimes = useCallback(async () => {
    try {
      const emptyList = Array.isArray(recentAnimes) && !recentAnimes.length;
      if (emptyList){
        const { report: { item } } = await API.getRecentAnimes();
        const parsedList = parsers.parseAnimeList(item);
        setRecentAnimes(item);
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
