const testObjects = function() {

  const firstName = 'Jose';
  const lastName = 'Mourinho';
  let club = 'Manchester United';
  const players = ['de Gea', 'Smalling', 'Mata', 'Rooney'];

  /*
  In ES6 we have some enhancements for objest.
  Let's take a look at an old way to work with objects:
  */
  let coach = {
    firstName: firstName,
    lastName: lastName,
    club: club,
    transferTo: function(player) {
      players.push(player);
    },
    transferFrom: function(player) {
      const index = players.indexOf(player);
      players.splice(index, 1);
    },
  };
  /*
  In ES6 we can use more convenient syntax
  for the same result:
  */
  coach = {
    firstName,
    lastName,
    club,
    transferTo(player) {
      players.push(player);
    },
    transferFrom(player) {
      const index = players.indexOf(player);
      players.splice(index, 1);
    },
  };

  console.log(coach);
  console.log(players);
  coach.transferFrom('Mata');
  coach.transferTo('Zlatan');
  console.log(players);

  /*
  In ES6 computed values work with
  object literals:
  */
  const newProperty = 'stadium';
  const clubInfo = {
    clubName: club,
    coach,
    players,
    [newProperty]: 'Old Trafford',
    ['get' + newProperty.slice(0,1).toUpperCase() + newProperty.slice(1)]() {
      return this[newProperty];
    },
  };
  console.log(clubInfo);
  console.log(clubInfo.getStadium());
};

export default testObjects
