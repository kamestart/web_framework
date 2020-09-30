if (process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}
const mongoose = require("mongoose")

//db stuff
mongoose.createConnection(process.env.DATABASE_URL, {useNewUrlParser: true,  useUnifiedTopology: true} )
