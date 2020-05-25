const parseAnimeList = json => {
  return json.map(item => ({
    addedAt: item.date_added[0],
    id: String(Date.now()+Math.random()),
    title: item.anime[0]._,
    url: item.anime[0].$.href,
  }));
};

const parsers = {
  parseAnimeList,
}

export default parsers;
