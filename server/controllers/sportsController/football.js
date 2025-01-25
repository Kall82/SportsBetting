const fs        = require('fs');
const axios     = require('axios');

//This function download the football data from online
const downloadFootballMatchData = async (req, res) =>
{

    gettingLeagues();
    //This function get the leagues from online
    const gettingLeagues = () =>
    {

    }

    //This function get the each matches from online
    const gettingMatches = () =>
    {

    }

}

exports.getDatas = async (req, res) =>
{
    fetch("https://v3.football.api-sports.io/fixtures", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "5107cb400cf402fb63c836cf0c8b717f"
	}
    })
    .then(response => {
        console.log("Getting Data===>",response);
    })
    .catch(err => {
        console.log(err);
    });
}

//These functions get the football data from server
//Server => Getting Leagues
exports.getLeagues = async (req, res) =>
{
   
}
//Server => Getting Matches
exports.getMatches = async (req, res) =>
{

}


