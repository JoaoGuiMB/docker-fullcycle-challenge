const createApp = require("./index.js")
const PORT = 3000

const listenApp = async () => {
  let app
  app = await createApp()
  
  return app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

listenApp()
