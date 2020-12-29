const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb://localhost:27017/productManager'

// process.env.MONGODB_URI ||
    

const connect = () => {
    mongoose.connect(MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        .then(() => console.log('MongoDB connected!'))
        .catch((err) => console.log(err))

}

module.exports = { connect }