const mongoose = require('mongoose')

// creating a database
mongoose.connect("mongodb://localhost:27017/thapadynamic", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( () => {
    console.log('Connection is Successful')
}).catch((error) => {
    console.log(error)
})