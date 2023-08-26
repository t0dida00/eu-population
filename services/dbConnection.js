const uri = "mongodb+srv://ddkhoa97:ddkhoa97@hatial.x6f8vvf.mongodb.net/newthingsco?retryWrites=true&w=majority";
const mongoose = require('mongoose');
// connect to your database

function connectToMongoDB() {
    mongoose.connect(uri, { useUnifiedTopology: true, keepAlive: true, });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected to MongoDB');
    });
}

module.exports = connectToMongoDB;
