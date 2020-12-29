const app = require('./src/app')

// const port = process.env.PORT

const port = 3333

app.listen(port, () => 
console.log(`Server is runnig at http://localhost:${port}`))