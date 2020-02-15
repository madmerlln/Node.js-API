const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    nome:{
        type: String,
        required: true,
    },
    genre:{
        type: String,
        required: true,
    },
    birthday:{
        type: Date,
        required: true,
    },
    avatarUrl:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);