// room.js

const HaxballJS = require("haxball.js");

HaxballJS.then((HBInit) => {
  // Same as in Haxball Headless Host Documentation
  const room = HBInit({
    roomName: "Haxball Versatility League",
    maxPlayers: 16,
    public: true,
    noPlayer: true,
    token: "thr1.AAAAAGUdjHxCucxxAToqvQ.Dxsx9RaJoCw", // Required
  });

  room.setDefaultStadium("Classic");
  room.setScoreLimit(3);
  room.setTimeLimit(0);

  room.onRoomLink = function (link) {
    console.log(link);
  };
});
