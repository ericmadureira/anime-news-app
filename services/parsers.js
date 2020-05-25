const parseAnimeList = json => {
  return json.map(item => ({
    title: item.anime[0]._,
    url: item.anime[0].$.href,
    dateAdded: item.date_added[0],
  }));
};

const parsers = {
  parseAnimeList,
}

export default parsers;
