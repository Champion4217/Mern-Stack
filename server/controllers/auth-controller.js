const User = require("../models/user-model.js");

const register = async(req, res, next) => {
    try {
        const {username, email, phone, password} = req.body;

        if(!username || !email || !phone || !password){
            return res.status(400).json({
                success: false,
                message: "Please enter all the fields"
            })
        }

        const userExists = await User.findOne({email: email});

        if(userExists){
            return res.status(400).json({
                success: false,
                message: "User Already Exists"
            })
        }
    
        const data = await User.create({
            username,
            email,
            phone,
            password
        });

        return res.status(200).json({
            success: true,
            message: "User Created Successfully",
            token: await data.generateToken(),
            userId: data._id.toString()
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
};

const login = async(req, res, next) => {
    try {
        const {email, password} = req.body;

        const userExists = await User.findOne({email});

        if(!userExists){
            return res.status(400).json({
                success: false,
                message: "Invalid Email or Password"
            })
        };


        const user = await userExists.comparePassword(password);

        if(!user){
           return res.status(400).json({
            success: false,
            message: "Invalid Email or Password"
           })
        };

        return res.status(200).json({
            success: true,
            message: `Login Successfully ${userExists.username}`,
            token: await userExists.generateToken(),
            userId: userExists._id.toString(),
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

module.exports = {
    register,
    login
}

