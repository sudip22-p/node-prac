import fetch from 'node-fetch';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const apiKey = process.env.CRIC_API;
// import ejs from 'ejs';

const app = express();
app.set('view engine', 'ejs')
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/live-scores', async (req, res) => {
    try {
        const matches = await fetchLiveScores();
        
        // Render the EJS template and pass the scores data
        try {
            res.render('data', { matches });
        } catch (renderError) {
            console.log(renderError.message);
            throw new Error(`Error rendering template: ${renderError.message}`);
            
        }
        // console.log(matches);
        
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch live scores' });
    }
});

async function fetchLiveScores() {
    try {
        const response = await fetch('https://api.cricapi.com/v1/cricScore?apikey='+apiKey);
        const data = await response.json();

        if (data.status !== "success") {
            throw new Error("Failed to fetch data");
        }

        return data.data || [];
    } catch (error) {
        throw new Error(`Error fetching live scores: ${error.message}`);
    }
}

app.get('/match-details', async (req, res) => {
    const matchId = req.query.id;
    // Assuming you have some function to fetch game details based on matchId
    const gameDetails = await getGameDetails(matchId);
    // console.log(gameDetails);
    res.render('match', { gameDetails }); // Assuming your EJS file is named match.ejs
    
});

async function getGameDetails(matchId) {
    try {
        const response = await fetch('https://api.cricapi.com/v1/match_info?apikey='+apiKey+'&id='+matchId);
        const data = await response.json();

        if (data.status !== "success") {
            throw new Error("Failed to fetch data");
        }

        return data.data || [];
    } catch (error) {
        throw new Error(`Error fetching live scores: ${error.message}`);
    }
}
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
