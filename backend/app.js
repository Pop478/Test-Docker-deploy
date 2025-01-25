const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/api/data', async (req, res) => {
    try {
        const response = await db.query(
            `SELECT user_id, first_name, last_name, status 
            FROM users`
        )
        const result = response.rows

        res.json({ result })
    } catch (err) {
        return res.status(400).json('Ошибака при запросе к postgreSQL')
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
