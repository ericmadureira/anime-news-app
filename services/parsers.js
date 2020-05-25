const parseAnimeList = json => {
  const id = item.anime[0].$.href.split('id=')[1];
  return json.map(item => ({
    addedAt: item.date_added[0],
    id,
    title: item.anime[0]._,
    url: `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=${id}`,
  }));
};

const parsers = {
  parseAnimeList,
}

export default parsers;
