const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    img_url:{
        type: String,
        required: true,
    },
    categoria:{
        type: String,
        required: true,
    },
    registro:{
        type: Array,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);