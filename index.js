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

app.get('/wizard/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('SELECT * FROM wizard WHERE id = $1', [id]);

        if (result.rowCount == 0) {
            res.status(500).json({
                status: 'null',
                message: 'Nenhum usuario encontrado',
                total: result.rowCount,
            })
        }

        res.json({
            status: 'success',
            message: 'Usuario encontrado',
            data: result.rows,
        });

    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Internal server error');
    }
});

app.get('/wizard/name/:name', async (req, res) => {

    const { name } = req.params;

    try {
        const result = await pool.query('SELECT * FROM wizard WHERE LOWER(name) LIKE $1', [`%${name.toLocaleLowerCase()}%`]);

        if (result.rowCount == 0) {
            res.status(500).json({
                status: 'null',
                message: 'Nenhum usuario encontrado',
                total: result.rowCount,
            })
        }

        res.json({
            status: 'success',
            message: 'Usuario encontrado',
            data: result.rows,
        });

    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Internal server error');
    }
});

app.post('/wizard', async (req, res) => {
    const { name, age, house, habilities, blood_status, patronus } = req.body;

    try {
        const result = await pool.query('INSERT INTO wizard (name, age, house, habilities, blood_status, patronus) VALUES ($1, $2, $3, $4, $5, $6)', [name, age, house, habilities, blood_status, patronus]);
        res.status(201).json({
            status: 'success',
            message: 'Usuario criado com sucesso',
            data: req.body
        })
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Internal server error');
    }
});

app.put('/wizard/:id', async (req, res) => {
    const { id } = req.params;
    const { name, age, house, habilities, blood_status, patronus } = req.body;

    try {
        const result = await pool.query('UPDATE wizard SET name = $1, age = $2, house = $3, habilities = $4, blood_status = $5, patronus = $6 WHERE id = $7', [name, age, house, habilities, blood_status, patronus, id]);
        res.status(200).json({
            status: 'success',
            message: 'Usuario atualizado com sucesso',
            data: req.body
        })
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Internal server error');
    }
});

app.delete('/wizard/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('DELETE FROM wizard WHERE id = $1', [id]);
        res.status(200).json({
            status: 'success',
            message: 'Usuario deletado com sucesso',
        })
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Internal server error');
    }
});

// wand routes

app.get('/wand', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM wand');

        if (result.rowCount == 0) {
            res.status(500).json({
                status: 'null',
                message: 'Nenhuma varinha encontrada',
                total: result.rowCount,
            })
        }

        res.json({
            status: 'success',
            message: 'Lista de varinhas',
            total: result.rowCount,
            data: result.rows,
        });
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Internal server error');
    }
});

app.get('/wand/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('SELECT * FROM wand WHERE id = $1', [id]);

        if (result.rowCount == 0) {
            res.status(500).json({
                status: 'null',
                message: 'Nenhuma varinha encontrada',
                total: result.rowCount,
            })
        }

        res.json({
            status: 'success',
            message: 'Varinha encontrada',
            data: result.rows,
        });

    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Internal server error');
    }
});

app.get('/wand/wood/:wood', async (req, res) => {
    const { wood } = req.params;

    try {
        const result = await pool.query('SELECT * FROM wand WHERE LOWER(wood) LIKE $1', [`%${wood.toLocaleLowerCase()}%`]);

        if (result.rowCount == 0) {
            res.status(500).json({
                status: 'null',
                message: 'Nenhuma varinha encontrada',
                total: result.rowCount,
            })
        }

        res.json({
            status: 'success',
            message: 'Varinha encontrada',
            data: result.rows,
        });

    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Internal server error');
    }
});

app.get('/wand/core/:core', async (req, res) => {
    const { core } = req.params;

    try {
        const result = await pool.query('SELECT * FROM wand WHERE LOWER(core) LIKE $1', [`%${core.toLocaleLowerCase()}%`]);

        if (result.rowCount == 0) {
            res.status(500).json({
                status: 'null',
                message: 'Nenhuma varinha encontrada',
                total: result.rowCount,
            })
        }

        res.json({
            status: 'success',
            message: 'Varinha encontrada',
            data: result.rows,
        });

    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Internal server error');
    }
});

app.post('/wand', async (req, res) => {
    const { wood, core, length } = req.body;

    try {
        const result = await pool.query('INSERT INTO wand (wood, core, length) VALUES ($1, $2, $3)', [wood, core, length]);
        res.status(201).json({
            status: 'success',
            message: 'Varinha criada com sucesso',
            data: req.body
        })
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Internal server error');
    }
});

app.put('/wand/:id', async (req, res) => {
    const { id } = req.params;
    const { wood, core, length } = req.body;

    try {
        const result = await pool.query('UPDATE wand SET wood = $1, core = $2, length = $3 WHERE id = $4', [wood, core, length, id]);
        res.status(200).json({
            status: 'success',
            message: 'Varinha atualizada com sucesso',
            data: req.body
        })
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Internal server error');
    }
});


app.delete('/wand/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('DELETE FROM wand WHERE id = $1', [id]);
        res.status(200).json({
            status: 'success',
            message: 'Varinha deletada com sucesso',
        })
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Internal server error');
    }
});