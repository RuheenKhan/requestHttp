const mongo = require("mongoose");
const {Schema} = mongo;

const indexSchema = new Schema({
    userId : Number,
    id : Number,
    title : String,
    body : String
});

module.exports = mongo.model("data",indexSchema);