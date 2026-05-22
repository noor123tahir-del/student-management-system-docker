const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const app = express();

app.use(cors());
app.use(express.json());

const config = {
    user: 'sa',
    password: 'YourPassword123!',
    server: 'database',
    database: 'StudentDB',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

app.post('/addStudent', async (req, res) => {

    const { name, roll } = req.body;

    try {

        await sql.connect(config);

        await sql.query`
            INSERT INTO Students (Name, RollNumber)
            VALUES (${name}, ${roll})
        `;

        res.send("Student Added");

    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});