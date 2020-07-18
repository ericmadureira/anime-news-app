import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';

import API from '../services/api';
import parsers from '../services/parsers';
import ListItem from '../components/ListItem';

const HomeScreen = () => {
  const [recentAnimes, setRecentAnimes] = useState([]);

  const fetchRecentAnimes = useCallback(async () => {
    try {
      const emptyList = Array.isArray(recentAnimes) && !recentAnimes.length;
      if (emptyList){
        const result = await API.getRecentAnimes();
        const parsedList = parsers.parseAnimeList(result);
        setRecentAnimes(parsedList);
      }
    } catch (e) {
      console.log(`Error while fetching data: ${e}`);
    };
  }, [recentAnimes, setRecentAnimes]);

  useEffect(() => {
    fetchRecentAnimes();
  }, [fetchRecentAnimes])

  const animes = useMemo(() => (
    <FlatList
      data={recentAnimes}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ListItem anime={item} />}
    />
  ), [recentAnimes]);

  return (
    <View>
      {animes}
    </View>
  );
};

export default HomeScreen;
