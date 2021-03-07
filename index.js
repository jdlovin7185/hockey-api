const express = require("express");
const app = express();

let usaPlayers = [
  {
    name: 'Colin White',
    position: {
      type: 'Forward',
      description: 'A forward is a player position on the ice whose primary responsibility is to score and assist goals. Generally, the forwards try to stay in three different lanes of the ice going from goal to goal. It is not mandatory, however, to stay in a lane.'
    },
    stats: {
      gamesPlayed: 8,
      goals: 2,
      assists: 1,
      points: 3,
      penaltyMinutes: 4
    },
    bio: {
      birth: '01/20/1997',
      nhlTeam: 'Ottawa Senators',
      weight: '183 lbs',
      height: `6'0"`, 
      description: 'Colin Andrew White (born January 30, 1997) is an American professional ice hockey forward for the Ottawa Senators of the National Hockey League (NHL). The Senators selected him in the first round, 21st overall, in the 2015 NHL Entry Draft.'
    },
    ImageUrl: 'https://assets.ngin.com/attachments/profiles/edd8-124380576/White_Colin.png'
  },
  {
    name: 'Cayden Primeau',
    position: {
      type: 'Goaltender',
      description: 'The goaltender or goalie is the player responsible for preventing the hockey puck from entering their team\'s net, thus preventing the opposing team from scoring'
    },
  stats: {
    gamesPlayed: 0,
    record: 0,
    minutes: 0,
    seconds: 0,
    goalsAllowed: 0,
    goalsAllowedAgainst: 0,
    saves: 0,
    savePercentage: 0,
    shutouts: 0
  },
  bio: {
    birth: '08/11/1999',
    nhlTeam: 'Montreal Canadians',
    weight: '198 lbs',
    height: `6'3"`,
    description: 'Cayden Primeau (born August 11, 1999) is an American professional ice hockey goaltender who is currently playing with the Laval Rocket in the American Hockey League (AHL) as a prospect for the Montreal Canadiens of the National Hockey League (NHL). He helped Northeastern win their third Hockey East Tournament in 2019 and received the Mike Richter Award as the National Goaltender of the Year the same season.'
  },
  ImageUrl: 'https://assets.ngin.com/attachments/profiles/0142-124378655/Primeau_Cayden.png'
  },
  {
    name: 'Jack Hughes',
    position: {
      type: 'Forward',
      description: 'A forward is a player position on the ice whose primary responsibility is to score and assist goals. Generally, the forwards try to stay in three different lanes of the ice going from goal to goal. It is not mandatory, however, to stay in a lane.'
    },
    stats: {
      gamesPlayed: 7,
      goals: 0,
      assists: 3,
      points: 0,
      penaltyMinutes: 0
    },
    bio: {
      birth: '05/14/2001',
      nhlTeam: 'New Jersey Devils',
      weight: '170 lbs',
      height: `5'10"`,
      description: 'Jack Hughes (born May 14, 2001) is an American professional ice hockey forward for the New Jersey Devils of the National Hockey League (NHL). A product of the U.S. National Development Team, Hughes was drafted first overall by the Devils in the 2019 NHL Entry Draft, a draft in which he was widely regarded as the top prospect.'
    },
    ImageUrl: 'https://assets.ngin.com/attachments/profiles/a04a-124376612/Hughes_Jack.png'
  },
  {
    name: 'Zack Werenski',
    position: {
      type: 'Defense',
      description: 'The basics of defensive zone positioning for defensemen are very simple. When the puck is up high, cover the forwards near the net, keep the net front clear. When not engaged in the corner, control the players closest to the net on your side or in front.'
    },
    stats: {
      gamesPlayed: 2,
      goals: 0,
      assists: 0,
      points: 0,
      penaltyMinutes: 0
    },
    bio: {
      birth: '07/19/1997',
      nhlTeam: 'Columbus Blue Jackets',
      weight: '209 lbs',
      height: `6'2"`,
      description: 'Zachary Werenski (born July 19, 1997) is an American professional ice hockey defenseman who plays for the Columbus Blue Jackets of the National Hockey League (NHL). Werenski was drafted eighth overall by the Blue Jackets in the 2015 NHL Entry Draft.'
    },
    ImageUrl: 'https://assets.ngin.com/attachments/profiles/b7a4-125076015/Werenski_Zach.png'
  },
  {
    name: 'Adam Fox',
    position: {
      type: 'Defense',
      description: 'The basics of defensive zone positioning for defensemen are very simple. When the puck is up high, cover the forwards near the net, keep the net front clear. When not engaged in the corner, control the players closest to the net on your side or in front.'
    },
    stats: {
      gamesPlayed: 8,
      goals: 0,
      assists: 1,
      points: 1,
      penaltyMinutes: 0
    },
    bio: {
      birth: '02/17/1998',
      nhlTeam: 'Calgary Flames',
      weight: '185 lbs',
      height: `5'10"`,
      description: 'Adam Fox (born February 17, 1998) is an American professional ice hockey defenseman for the New York Rangers of the National Hockey League (NHL). He played two seasons in the U.S. National Team Development Program, and finished with the record for the most assists in a single season (in 2015-16) and the most assists in a career (in 2014-16). He was named the 2016 IIHF World U18 Championships Best Defenseman. Fox was selected by the Calgary Flames, 66th overall, in the 2016 NHL Entry Draft, but opted to go to college. He played collegiate ice hockey for Harvard University, leading all NCAA defensemen in the nation in assists and points in his freshman season, and leading all defenseman in the country in points per game and assists in his junior season. In June 2018, Calgary traded Fox\'s NHL rights to the Carolina Hurricanes, who traded them to the New York Rangers in April 2019. He left college a year early, and made his NHL debut for the Rangers in 2019. In his rookie season, he tied for second among all NHL rookie defensemen in goals, and was third in assists and points.'
    },
    ImageUrl: 'https://assets.ngin.com/attachments/profiles/dbff-124367740/Fox_Adam.png'
  }
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to Team USA');
});

app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/players', (req, res) => {
  res.json(usaPlayers);
});

//listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});