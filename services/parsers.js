const parseAnimeList = json => {
  const { report: { item: resultList } } = json;
  return resultList.map(item => {
    const { $: { href }, _: title } = item.anime[0];
    const id = href.split('id=')[1];
    return {
      addedAt: item.date_added[0],
      id,
      title,
      url: `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=${id}`,
    }
  });
};

const parsers = {
  parseAnimeList,
}

export default parsers;
