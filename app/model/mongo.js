module.exports = app => {

    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    
    const schema = new Schema({
        // id: {type: Number, unique: true, required: true},
        account: {type: String, required: true},
        time: {type: Number},
    })

    return mongoose.model('user', schema)
}