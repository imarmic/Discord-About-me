const Hypixel = require("hypixel-api-reborn")
const { default: axios } = require("axios")
const config = require("../config.json")

const hypixel = new Hypixel.Client(config.ApiKey);

setInterval(() => { 
    hypixel.getPlayer(config.username).then(player => { 
        axios({method: 'patch', url: "https://discordapp.com/api/v6/users/@me", headers: { authorization: config.token, "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
  }, data: { bio: "`` 🔴🟢🟡       Stats        ⎯⠀❐ ⤬ `` ``          " + "   " + player.stats.bedwars.level + "⭐                  \n" +                      "             Wins:  "+ player.stats.bedwars.wins + "             " +  "\n "+ "            Finals: " + player.stats.bedwars.finalKills + "           " + "\n" + ""+ "             FKDR: " + player.stats.bedwars.finalKDRatio + "             ``"}})
    }).then(() => {
        console.log("Updated")
    })}, 10000)
