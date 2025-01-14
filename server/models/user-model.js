const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

// Json Web token

userSchema.methods.generateToken = function(){
   try {
      return jwt.sign({
         userId: this._id.toString(),
         email: this.email,
         isAdmin: this.isAdmin
      }, 
      process.env.SECRET_KEY,
      {
        expiresIn: '1d'
      }
    );
   } catch (error) {
     console.log(error);
   }
};

// Password compare

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

const User = new mongoose.model('User', userSchema);

module.exports = User;