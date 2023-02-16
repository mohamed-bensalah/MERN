const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dragons', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('we are connected hamdoula'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));