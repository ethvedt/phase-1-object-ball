function gameObject() {
    const gameObject = {
        home:{
            teamName:'Brooklyn Nets',
            colors:['black','white'],
            players:{
                [playerList.home[0]]: {
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1
                },
                [playerList.home[1]]: {
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7
                },
                [playerList.home[2]]: {
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15
                },
                [playerList.home[3]]: {
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5
                },
                [playerList.home[4]]: {
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:1,
                    steals:4,
                    blocks:11,
                    slamDunks:1
                }
            }
        },
        away:{
            teamName:'Charlotte Hornets',
            colors:['turquoise','purple'],
            players:{
                [playerList.away[0]]: {
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2
                },
                [playerList.away[1]]: {
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10
                },
                [playerList.away[2]]: {
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5
                },
                [playerList.away[3]]: {
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0
                },
                [playerList.away[4]]: {
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12
                }
            }
        }
    }
    return gameObject;
}

const playerList = {
    home: ['Alan Anderson', 'Reggie Evans', 'Brook Lopez', 'Mason Plumlee', 'Jason Terry'],
    away: ['Jeff Adrian', 'Bismak Biyombo', 'DeSagna Diop', 'Ben Gordon', 'Brendan Haywood']
}
//console.log(gameObject());

function numPointsScored(name) {
    const game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        if (teamObj.players.hasOwnProperty(name) === true) {
            return teamObj.players[name].points;
        }
    }
    return false;
};

function shoeSize(name) {
    const game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        //console.log(teamObj.players);
        if (teamObj.players.hasOwnProperty(name) === true) {
            return teamObj.players[name].shoe;
        }
    }
    return false;
};

function teamColors(name) {
    const game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        if (teamObj.teamName === name){
            return teamObj.colors;
        }
    }
};

function teamNames() {
    const names = [];
    const game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        names.push(teamObj.teamName);
    }
    return names;
};

function playerNumbers() {
    const numbers = [];
    const game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        for (let playerKey in teamObj.players) {
            numbers.push(teamObj.playerKey.number);
        }
    }
    return numbers;
};

function playerStats(name) {
    const game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        if (teamObj.players.hasOwnProperty(name) === true) {
            return teamObj.players[name];
        }
    }
    return false;
};

function bigshoeRebounds() {
    const game = gameObject();
    let bothTeamsBigShoe = [];
    const teams = ['home','away'];
    for (let teamKey in playerList) {
        let shoeSizes = [];
        for (let players in playerList[teamKey]) {
            const playerShoe = playerList[teamKey][players];
            const playerSize = shoeSize(playerShoe);
            shoeSizes.push(playerSize);
        };
        const biggestShoe = Math.max(...shoeSizes);
        const bigShoeIndex = shoeSizes.indexOf(biggestShoe)
        const bigShoePlayer = playerList[teamKey][bigShoeIndex];
        bothTeamsBigShoe.push(bigShoePlayer);
    }
    let gameBigShoe = [];
    for (names in bothTeamsBigShoe) {
        const shoes = shoeSize(bothTeamsBigShoe[names]);
        gameBigShoe.push(shoes);
    }
    const gameBiggestShoe = Math.max(...gameBigShoe);
    const gameBigShoeIndex = gameBigShoe.indexOf(gameBiggestShoe);
    debugger;
    const gameBigShoePlayer = bothTeamsBigShoe[gameBigShoeIndex];
    debugger;
    return playerStats(gameBigShoePlayer).rebounds;
}

function mostPointsScored() {
    const game = gameObject();
    let mostPoints = 0;
    let name = ''; 
    for (let gameKey in game) {
        for (let playerKey in game[gameKey].players) {
            if (game[gameKey].players[playerKey].points > mostPoints) {
                mostPoints = game[gameKey].players[playerKey].points;
                name = String(playerKey);
            }
        }
    }
    console.log(`${name} scored the most points with ${mostPoints} points.`);
    return name;
}

function winningTeam() {
    const game = gameObject();
    const teams = ['home','away'];
    let name = ''; 
    let points = [];
    for (let gameKey in game) {
        let teamPoints = 0;
        for (let playerKey in game[gameKey].players) {
            teamPoints += game[gameKey].players[playerKey].points;
        }
    points.push(teamPoints);
    }
    const winningTeamPoints = Math.max(...points);
    const winningTeamIndex = points.indexOf(winningTeamPoints);
    const winningTeamSide = teams[winningTeamIndex];
    const WinningTeamName = game[winningTeamSide].teamName;
    console.log(`${WinningTeamName} won the game with ${winningTeamPoints} points.`);
    return WinningTeamName;            
}

//game[teams[points.indexOf(Math.max(...points))]].teamName