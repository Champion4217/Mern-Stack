const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

// Using pre method hashing the password

userSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified('password')){
        next();
    }

    try {
        const salt_round = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(user.password, salt_round);
        user.password = hashedpassword;
    } catch (error) {
        next(error);
    }
});



const User = new mongoose.model('User', userSchema);

module.exports = User;