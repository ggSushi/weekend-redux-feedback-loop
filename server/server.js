const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5001;
// * Added post assignment
const pool = require('./modules/pool.js')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback-server', (req, res) => {
    console.log(`POST;`, req.body);
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;

    pool.query(queryText, [
        req.body.feeling, 
        req.body.understanding, 
        req.body.support, 
        req.body.comments
    ]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in POST: ${error}`);
        res.sendStatus(500);
    })
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});