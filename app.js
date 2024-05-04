const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'nom',  // replace with your mysql username
    password: 'motDePasse',  // replace with your mysql password
    database: 'jeux-video'  // replace with your database name
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Route to handle POST request
app.post('/submit-form', (req, res) => {
    let data = { nom: nom, motDePasse: motDePasse };
    let sql = "INSERT INTO utilisateurs SET ?";
    let query = db.query(sql, data, (err, results) => {
        if (err) throw err;
        res.send('User added successfully');
    });
});

// Server listening
app.listen(port, () => {
    console.log(`Server running on http://192.168.1.41/inscription.html:${80}`);
});
