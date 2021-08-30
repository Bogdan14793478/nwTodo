const {Schema, model} = require("mongoose")

const shema = new Schema({
    task: {type: String, required: true},
    index: {type: Number, required: true},
    parentId: {type: String, required: true} 
})

module.exports = model("Todo", shema)