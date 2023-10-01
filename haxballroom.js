const HaxballJS = require("haxball.js");

HaxballJS.then((HBInit) => {
  // Same as in Haxball Headless Host Documentation
  const room = HBInit({
    roomName: "1v1",
    maxPlayers: 16,
    public: true,
    noPlayer: true,
    token: "", // Required
  });

  room.setDefaultStadium("Classic");
  room.setScoreLimit(5);
  room.setTimeLimit(0);

  room.onRoomLink = function (link) {
    console.log(link);
  };
});