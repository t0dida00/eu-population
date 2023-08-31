const uri = "mongodb+srv://admin:admin@oamk.z3ezz4i.mongodb.net/eu-population?retryWrites=true&w=majority";
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
