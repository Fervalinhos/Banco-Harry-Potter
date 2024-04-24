const express = require('express');
const app = express();
const PORT = 4000;

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'harrypottercocco',
    password: 'ds564',
    port: 7007,
});

app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server ON FML ✨ ${PORT}`);
});

app.get('/', (req, res) => {
    res.send("Teste de server com o banco de dados Harry Potter");
});

app.get('/wizard', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM wizard');

        if (result.rowCount == 0) {
            res.status(500).json({
                status: 'null',
                message: 'Nenhum usuario encontrado',
                total: result.rowCount,
            })
        }

        res.json({
            status: 'success',
            message: 'Lista de usuarios',
            total: result.rowCount,
            data: result.rows,
        });


    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Internal server error');
    }

});