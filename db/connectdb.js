const mongoose = require('mongoose')
const Local_Url = 'mongodb://127.0.0.1:27017/Preactice'
const Live_URL = "mongodb+srv://chiragkushwah06:ram123@cluster0.ytcxkya.mongodb.net/Preactice?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = () => {
    return mongoose.connect(Live_URL)
        .then(() => {
            console.log('Connnection Succesful')
        })
        .catch((error) => {
            console.log(error)
        })

}


module.exports = connectDb