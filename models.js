const mongoose = require('mongoose');

let playerSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Position: [{type: mongoose.Schema.Types.ObjectId, ref: 'Position'}],
    Stats: {
      GamesPlayed: String,
      Goals: String,
      Assists: String,
      Points: String,
      PenaltyMinutes: String
    },
    Bio: {
      Birth: Date,
      NHLTeam: [{type: mongoose.Schema.Types.ObjectId, ref: 'Team'}],
      Weight: String,
      Height: String, 
      Description: String
    },
    ImagePath: String
});

let userSchema = mongoose.Schema({
  Username: {type: String, required: true},
  Password: {type: String, required: true},
  Email: {type: String, required: true},
  FavoritePlayer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player'}]
});

let Player = mongoose.model('Player', playerSchema);
let User = mongoose.model('User', userSchema);

module.exports.Player = Player;
module.exports.User = User;