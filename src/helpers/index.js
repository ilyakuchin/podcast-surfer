const mockState = {
  userInfo: {
    jwt: 'test',
    username: 'testLogin',
    password: 'testPassword',
    validationErrorMessage: 'error'
  },
  subscriptions: {
    isFetching: false,
    podcasts: [
      { id: '1', image: 'sublink', rss: 'subrss1', name: 'subname' },
      { id: '2', image: 'sublink2', rss: 'subrss2', name: 'subname2' },
      { id: '3', image: 'sublink3', rss: 'subrss3', name: 'subname3' }
    ]
  },
  podcasts: {
    isFetching: false,
    podcasts: [
      { id: '1', image: 'link', rss: 'rss1', name: 'name' },
      { id: '2', image: 'link2', rss: 'rss2', name: 'name2' },
      { id: '3', image: 'link3', rss: 'rss3', name: 'name3' }
    ]
  },

  searchPhrase: 'testSearchPhrase',

  currentPodcast: {
    isFetching: false,
    name: 'testName',
    description: 'testDescription',
    imageUrl: 'testImageUrl',
    rss: 'rssUrl',
    episodes: [
      {
        id: '1',
        name: 'name1',
        description: 'description1',
        image: 'image1',
        audio: 'audio1'
      },
      {
        id: '2',
        name: 'name2',
        description: 'description2',
        image: 'image2',
        audio: 'audio2'
      },
      {
        id: '3',
        name: 'name3',
        description: 'description3',
        image: 'image3',
        audio: 'audio3'
      }
    ]
  },
  currentEpisode: {
    isFetching: false,
    name: 'test',
    description: 'description',
    imageUrl: 'imageUrl',
    audioUrl: 'audioUrl'
  }
};

export default mockState;
