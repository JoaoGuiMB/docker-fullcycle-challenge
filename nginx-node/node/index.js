const express = require('express')
const { queryPromise } = require('./queryPromise.js')

async function createApp() {
  const app = express()

  const characters = [['Joao']]
  const sqlInsert = `INSERT INTO people(name) VALUES ?`;

  await queryPromise.queryMultiple(sqlInsert, characters)

  app.get('/', async (req, res) => {
    const selectCharacters = `SELECT * FROM people`
    const allCharacters = await queryPromise.query(selectCharacters)

    const html = `<h1>Full Cycle Rocks!</h1>\n
  <ul>
    ${allCharacters.map(character => `<li>${character.name}</li>`).join('')}
  </ul>`

    res.send(html)
  })
  return app
}

module.exports = createApp
