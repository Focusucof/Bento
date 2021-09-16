// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Devin',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'InsertYourAPIKeyHere123456',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
    {
      id: '2',
      name: 'Twitch',
      icon: 'twitch',
      link: 'https://www.twitch.tv/',
    },
    {
      id: '3',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      id: '4',
      name: 'Mail',
      icon: 'mail',
      link: 'https://gmail.com/',
    },
    {
      id: '5',
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '6',
      name: 'HackerOne',
      icon: 'terminal',
      link: 'https://hackerone.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'film',
  secondListIcon: 'code',

  // Links
  lists: {
    firstList: [
      {
        name: 'Disney+',
        link: 'https://www.disneyplus.com/',
      },
      {
        name: 'Netflix',
        link: 'https://www.netflix.com/ca/',
      },
      {
        name: '',
        link: '',
      },
      {
        name: '',
        link: '',
      },
    ],
    secondList: [
      {
        name: 'localhost:1337',
        link: 'http://localhost:1337/',
      },
      {
        name: 'localhost:8080',
        link: 'http://localhost:8080/',
      },
      {
        name: 'localhost:80',
        link: 'http://localhost/',
      },
      {
        name: 'localhost:3000',
        link: 'http://localhost:3000/',
      },
    ],
  },
};
