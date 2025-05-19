import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '', 
    database: 'electricity'
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL");
});

function calculateBill(units) {
    let amount = 0;
    if (units <= 50) amount = units * 3.50;
    else if (units <= 150) amount = (50 * 3.5) + ((units - 50) * 4.00);
    else if (units <= 250) amount = (50 * 3.5) + (100 * 4.0) + ((units - 150) * 5.20);
    else amount = (50 * 3.5) + (100 * 4.0) + (100 * 5.2) + ((units - 250) * 6.50);
    return amount;
}

app.post('/api/calculate-bill', (req, res) => {
    const { name, email, units } = req.body;
    const amount = calculateBill(units);

    db.query('INSERT INTO consumer (name, email) VALUES (?, ?)', [name, email], (err, result) => {
        if (err) return res.status(500).send(err);
        const consumer_id = result.insertId;

        db.query('INSERT INTO billing (consumer_id, units, amount) VALUES (?, ?, ?)', [consumer_id, units, amount], (err2) => {
            if (err2) return res.status(500).send(err2);
            res.json({ message: 'Bill calculated successfully', amount });
        });
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
