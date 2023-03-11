const {createPool} = require("mysql2");
const dotenv = require('dotenv')

dotenv.config()

const pool = createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE

}).promise()

// pool.query(`SELECT * FROM info_table`, (error, res) => {
//     return console.log(res)
// })

const getInfo = async () => {
    const rows = await pool.query("SELECT * FROM info_table")
    return console.log(rows)

}

getInfo();